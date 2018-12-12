/*
 *WantsRes.js 是对response对象进行封装，并最小化程度的污染命名空间 
 *
 */
var fs = require('fs'), http = require('http'), path = require('path'), mime = require('mime'), sendfile = require('./response_static'), sendfavicon = require('./response_favicon'), wantszlib = require('./zlib'), configZlib = _wants_config.isZlib, Session = require('./session'), sessionName = Session.sessionName;
var msg = require('./msg/msg'), WantsRes404 = require('./response_404'), WantsRes_errorres = WantsRes404.errorres, defaultcharset = _wants_config.charset, baseDir = _wants_config.baseDir;
var WantsRes = module.exports = function() {
	if (!(this instanceof arguments.callee))
		return new arguments.callee();
	this.res = http.ServerResponse.prototype;
	this._wantsResMethod = [ 'cache', 'send', 'sendjson', 'sendjsonp', 'sendfile', 'file', 'contenttype', 'download', 'r404', 'r403', 'r500', 'attachment',
			'set', 'get', 'clearcookie', 'cookie', 'cookiep3p', 'redirect', 'favicon', 'links' ];
	if (Session.isSession)
		this._wantsResMethod.push('gensession', 'updatesession', 'delsession'); // 如果开启session支持
	this._wantsdefine(this.res, this._wantsResMethod); // 定义res对象的方法
};
WantsRes.prototype = {
	_cache : function(res, type, maxAge) { // 设置缓存头，如果想要此请求被缓存
		var option = option || {};
		if (maxAge)
			type += ', max-age=' + (maxAge / 1000);
		this._set(res, 'Cache-Control', type);
		return res;
	},
	_send : function(res, body, statscode, iszlib, issession) { // 核心函数，响应buffer或者字符串
		var type, req = res._wantsReq, acceptEncoding = req.headers['accept-encoding'], issession = 'undefined' == typeof issession ? true : issession, charset = res.charset
				|| defaultcharset, body = body + '' || '';
		if (statscode)
			res.statusCode = statscode; // 如果传递了http状态码
		if (Session.isSession && issession)
			res.updatesession(req._SessionObj); // 更新session
		if (204 == res.statusCode || 304 == res.statusCode) {
			res.removeHeader('Content-Type');
			res.removeHeader('Content-Length');
			body = '';
		} else if (!res.getHeader('Content-Type'))
			res.setHeader('Content-Type', ' text/html; charset=' + charset);
		this._sercookie(res);// 发送cookie
		if ('undefined' === typeof iszlib)
			var iszlib = configZlib;// 如果未单独传递gizp，则使用默认规则
		if (iszlib && (type = wantszlib.check(acceptEncoding))) {
			wantszlib.send(res, body, type); // 是否使用gizp输出
		} else {
			res.setHeader('Content-Length', Buffer.byteLength(body, charset));// 增加content-length长度
			body = _wants_utils.headReq(req, body);// 如果是head请求，则值响应http头,返回空

			res.end(body);// 正常输出
		}
		return res;
	},
	_sendjson : function(res, obj, statscode, iszlib, issession) { // json字符串输出
		this._contenttype(res, '.json');
		this._send(res, JSON.stringify(obj), statscode, iszlib, issession);
		return res;
	},
	_sendjsonp : function(res, obj, statscode, iszlib, issession) {// jsonp支持，参数必须为小写的
		// callback
		var body = JSON.stringify(obj), callback = res._wantsReq.getparam['callback'];
		res.setHeader('Content-Type', 'text/javascript');
		if (callback) {
			body = callback.replace(/[^\w$.]/g, '') + '(' + body + ');';
			this._send(res, body, statscode, iszlib, false);
		} else
			res.send(msg.resmsg.resJsonpError);
		return res;
	},
	_sendfile : function(res, filepath, callback) {// 响应文件
		if (!filepath)
			return callback(msg.errmsg.resFilepathError);
		sendfile(res, filepath, callback);
		return res;
	},
	_file : function(res, filepath, callback) {// 响应文件,这个api是输出相对于
		if (!filepath)
			return callback(msg.errmsg.resFilepathError);
		sendfile(res, baseDir + filepath, callback);
		return res;
	},
	_contenttype : function(res, filename) { // 设置 Content-Type 的值
		var charset = res.charset || defaultcharset;
		res.setHeader('Content-Type', mime.lookup(filename) + '; ' + charset);
		return res;
	},
	_attachment : function(res, filename) { // 设置下载头
		if (filename)
			this._contenttype(res, filename);
		res.setHeader('Content-Disposition', 'attachment; filename="' + path.basename(filename) + '"');
		return this;
	},
	_download : function(res, filepath, fn) { // 响应下载
		this._attachment(res, filepath)._sendfile(res, filepath, fn);
		return res;
	},
	_r404 : function(res, filepath, fn) { // 响应下载
		if (2 == arguments.length && 'function' === typeof filepath) {
			var fn = filepath, filepath = false;
		}
		WantsRes404(res, filepath, fn);
		return res;
	},
	_r403 : function(res, fn) {
		WantsRes_errorres(res, fn, 403)
		return res;
	},
	_r500 : function(res, fn) {
		WantsRes_errorres(res, fn, 500)
		return res;
	},
	_set : function(res, field, val) { // 设置响应头
		if (3 == arguments.length)
			res.setHeader(field, val);
		else
			for ( var key in field)
				res.setHeader(key, field[key]);
		return res;
	},
	_get : function(res, field) { // 获得响应头
		res.getHeader(field);
		return res;
	},
	_clearcookie : function(res, name) { // 清除cookie
		var opts = {
			expires : new Date(1),
			path : '/'
		};
		this._cookie(res, name, '', opts);
		return res;
	},
	_cookie : function(res, name, val, options) { // 设置cookie
		var options = options || {};
		if ('object' == typeof val)
			val = 'j:' + JSON.stringify(val);
		if (options.maxAge)
			options.expires = new Date(Date.now() + options.maxAge);
		if (null == options.path)
			options.path = '/';
		var cookie = _wants_utils.serializeCookie(name, val, options);
		if (!res._wantscookieobj)
			res._wantscookieobj = {};
		res._wantscookieobj[name] = {
			name : name,
			val : val,
			options : options,
		}
		return res;
	},
	_cookiep3p : function(res) {
		res.setHeader('p3p', 'CP="CURa ADMa DEVa PSAo PSDo OUR BUS UNI PUR INT DEM STA PRE COM NAV OTC NOI DSP COR"')
		return res;
	},
	_sercookie : function(res) {
		if (!res._wantscookieobj)
			return;
		var cookiestr = '', co, coarray = [];
		for ( var j in res._wantscookieobj) {
			co = res._wantscookieobj[j];
			coarray.push(_wants_utils.serializeCookie(j, co.val, co.options));
		}
		res.setHeader('Set-Cookie', coarray);
	},
	_redirect : function(res, url, statecode) { // 跳转
		if (url == 'back')
			var url = res.get('Referrer') || '/';
		this._set(res, {
			'Location' : url,
			'Content-Type' : 'text/plain'
		}).statusCode = statecode || 302;
		this._cache(res, 'no-cache');
		res.send(msg.tipsmsg.resRedirect + url);
		return res;
	},
	_favicon : function(res, filepath) { // 输出favicon
		sendfavicon(res, filepath);
		return res;
	},
	_gensession : function(res, obj, callback) { // 创建sessionid入口
		var callback = callback || function() {
		}, obj = obj || {};
		return Session.genSession(obj, function(err, _wantssid, sobj) {
			res._wantsReq._SessionObj = sobj; // 更新req对象的 _SessionObj
			// 对象，因为第一次创建，否则为 undefined
			res.cookie(sessionName, _wantssid, {
				maxAge : Session.expire
			}); // 设置cookie
			callback(err, sobj);
		});
	},
	_updatesession : function(res, obj) { // 更新session
		if (obj && obj._wantssid) {
			var _wantssid = obj._wantssid;
			res.cookie(sessionName, _wantssid, {
				maxAge : Session.expire
			});
			Session.updateSession(_wantssid, obj);
		}
		return res;
	},
	_delsession : function(res) { // 删除session
		var _wantssid = this._wantsgetSessionId(res);
		if (_wantssid) {
			res.cookie(sessionName, _wantssid, {
				maxAge : -1
			});
			Session.delSession(_wantssid);
		}
		return res;
	},
	_links : function(res, links) {// copy from expressjs
		return res.set('Link', Object.keys(links).map(function(rel) {
			return '<' + links[rel] + '>; rel="' + rel + '"';
		}).join(', '));
	},
	_wantsgetSessionId : function(res) { // 根据请求对象，获得sessionid
		return _wants_utils.parseJSONCookies(_wants_utils.parseCookie(res._wantsReq.headers.cookie || ''))[sessionName] || false;
	},
	_wantsdefine : function(res, array) { // 定义res的方法
		var that = this;
		array.forEach(function(value, i) {
			res[value] = (function(value) {
				return function() {
					var arg = Array.prototype.slice.apply(arguments);
					arg.unshift(this);
					return that['_' + value].apply(that, arg);
				}
			})(value)
		});
	},
};
