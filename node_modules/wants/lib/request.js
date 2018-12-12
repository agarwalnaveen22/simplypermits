/*
 *对request对象进行封装，并最小化程度的污染命名空间 
 */
var http = require('http'), path = require('path'), url = require('url'), qs = require('qs');
var normalize_query = _wants_utils.normalize_query;// 正常化用户请求的url路径去除../../等
var Session = require('./session');
var msg = require('./msg/msg'), genparamdot = require('./request_param');// 拼装param对象
var postParam = require('./request_post_param');
var isWindows = !!process.platform.indexOf('win');// 是否是windows
var sessionName = Session.sessionName;// 读取sessionname
var WantsReq = module.exports = function() {
	if (!(this instanceof arguments.callee))
		return new arguments.callee();
	this.Req = http.IncomingMessage.prototype;
	if (Session.isSession) {
		this.Req.getsession = this._wantsGetSession; // 设置getsession方法
		this.Req.delsession = this._wantsDelSession; // 设置删除session方法
	}
	this.Req.GetiPostParamFunc = function(callback) { // 设置 Post传递的参数
		postParam(this, callback);
	};
	this.Req._wantsGetParamFunc = this._wantsGetParam;
	this._wantsDefine(this._wantsMakeMid()); // 定义各种方法
};
WantsReq.prototype = {
	_wantsParseUrl : function() {
		return url.parse(this.url);
	}, // 拼装url，私有方法
	_wantsGetSession : function(callback) { // 获得session
		var callback = callback || function() {
		}, sid = this.cookie[sessionName], that = this;
		if (!sid)
			return callback(msg.errmsg.sessionNoneError); // 如果sid不存在则返回err
		return Session.getSession(sid, function(err, sobj) { // 否则执行获得session方法
			that._SessionObj = sobj; // 将获得的 session 对象存入 req 对象的
			// _SessionObj key 中
			callback(err, sobj);
		});
	},
	_wantsDelSession : function() {
		var sid = this.cookie[sessionName];
		this._wantsRes.delsession(sid);
	},
	_wantsMakeMid : function() {
		var that = this; // 为req对象添加的一些方法和属性
		return [ {
			name : '_wantsParseUrl',
			get : that._wantsParseUrl
		}, {
			name : 'path',
			get : that.AnalyzeUrl
		}, {
			name : 'ip',
			get : that._wantsGetIp
		}, {
			name : 'referer',
			get : that._wantsGetReferer
		}, {
			name : 'referrer',
			get : that._wantsGetReferer
		}, {
			name : 'useragent',
			get : that._wantsGetUserAgent
		}, {
			name : 'getparam',
			get : that._wantsGetParam
		}, {
			name : 'queryparam',
			get : that._wantsGetParam
		}, {
			name : 'deleteparam',
			get : that._wantsPostParam
		}, {
			name : 'postparam',
			get : that._wantsPostParam
		}, {
			name : 'bodyparam',
			get : that._wantsPostParam
		}, {
			name : 'putparam',
			get : that._wantsPostParam
		}, {
			name : 'isxhr',
			get : that._isxhr
		}, {
			name : 'cookie',
			get : that._wantsGetCookie
		} ];
	},
	AnalyzeUrl : function(url) { // 序列化请求地址，切割成数组，保证2个有效路径
		var url = normalize_query(url || this._wantsParseUrl.pathname), // 抵御相对路径攻击
		href = url.split('/').filter(function(val) {
			return val != ''
		});
		this.pathname = ('/' + href.join('/')) || '/';
		if (href.length === 0)
			href = [ 'index', 'index' ]; // 补足2个有效路径
		else if (href.length === 1)
			href.push('index');
		return href;
	},
	_wantsGetIp : function() { // 客户端IP地址
		return this.socket && (this.socket.remoteAddress || (this.socket.socket && this.socket.socket.remoteAddress));
	},
	_wantsGetReferer : function() { // 获取来源
		return this.headers['referer'] || this.headers['referrer'] || '';
	},
	_wantsGetUserAgent : function() { // 获取用户信息
		return this.headers['user-agent'] || '';
	},
	_wantsGetParam : function(query) { // 获取get的请求参数
		var query = query || this._wantsParseUrl.query || '';
		// 以下利用tj的qs模块即可
		return genparamdot(qs.parse(query));// 处理带点的参数
	},
	_wantsPostParam : function(callback) {
		if (this.method !== 'POST' && this.method !== 'PUT')
			return {};
		return this._wantsPostData; // request_post_param 模块会将 post 得到的参数传入这个对象
	},
	_wantsGetCookie : function() { // 获取cookie对象
		var cookie = this.headers.cookie || {};
		if (!cookie)
			return cookie;
		try {
			cookie = _wants_utils.parseJSONCookies(_wants_utils.parseCookie(cookie));
			return cookie;
		} catch (err) {
			return {};
		}
	},
	_isxhr : function() { // 返回是否是ajax xhr请求
		return 'xmlhttprequest' == (this.headers['x-requested-with'] || '').toLowerCase();
	},
	_wantsDefine : function(MidArray) { // 逐个定义 MidArray 数组中的属性
		var that = this;
		MidArray.forEach(function(value, i) {
			Object.defineProperty(that.Req, value.name, {
				set : function(newValue) {
					value.name = newValue;
				},
				get : function() {
					return value.get.call(this);
				},
				enumerable : false
			});
		})
	}
}
