/*
 *静态文件输出的模块
 *
 *为res.sendfile提供了支持，主要功能是设置响应头，并且响应静态文件
 *
 *增加了静态文件的2次状态缓存，加速响应，减少i/o操作
 *
 *exports fn(res, path, cb)
 */
var fs = require('fs'), path = require('path'), Buffer = require('buffer').Buffer;
var mime = require('mime'), wantszlib = require('./zlib'), msg = require('./msg/msg');
var WantsStatic = {// 读取配置文件
	option : {
		getOnly : _wants_config.staticGetOnly,
		maxAge : _wants_config.statciMaxAge,
	},
	mtimeBuffer : {},// 2级缓存，减少一次i/o操作
	Lv2MaxAge : _wants_config.staticLv2MaxAge,// 2级缓存存在时间
	zlibArray : _wants_config.ZlibArray, // 选择性gzip输出
};
WantsStatic.setHeaders = function(res, option) { // 设置各种静态响应头
	var charset = mime.charsets.lookup(option.type);
	if (!res.getHeader('Date'))
		res.setHeader('Date', new Date().toUTCString());
	if (!res.getHeader('Cache-Control'))
		res.setHeader('Cache-Control', 'public, max-age=' + (option.maxAge / 1000));
	if (!res.getHeader('Last-Modified'))
		res.setHeader('Last-Modified', option.mtime.utc);
	if (!res.getHeader('Content-Type'))
		res.setHeader('Content-Type', option.type + (charset ? '; charset=' + charset : ''));
	if (!res.getHeader('Etag'))
		res.setHeader('Etag', option.mtime.utcmd5);
	res.setHeader('Accept-Ranges', 'bytes');
};

WantsStatic.sendfiles = function(req, res, filepath, stype, cb) { // 输出文件的方法
	var acceptEncoding = req.headers['accept-encoding'], // 获取客户端是否支持gzip
	type = wantszlib.check(acceptEncoding), stype = stype, canZlib = WantsStatic.zlibArray.some(function(value) {// 判断文件类型是否在gizp输出数组中
		return value == stype;
	});
	fs.readFile(filepath, function(err, data) {
		if (err) { // 如果错误，则输出404
			_wants_utils.errorRes404(res, msg.resmsg.notFound);
			return cb(err);
		}
		if (type && canZlib)
			wantszlib.send(res, data, type); // gzip输出
		else {
			res.setHeader('Content-Length', data.length); // 正常输出
			data = _wants_utils.headReq(req, data);// 如果是head请求，则值响应http头,返回空
			res.end(data);
		}
		cb();
	});
};
WantsStatic.ranges = function(res, ranges, stats, cb) { // ranges支持
	var len = stats.size, ranges = _wants_utils.parseRange(len, ranges, cb), opts = {};
	if (ranges) {
		opts.start = ranges[0].start;
		opts.end = ranges[0].end;
		len = opts.end - opts.start + 1;
		res.statusCode = 206;
		res.setHeader('Content-Range', 'bytes ' + opts.start + '-' + opts.end + '/' + stat.size);
	} else {
		cb('Range error:' + _wants_utils.error(416));
		return false;
	}
	return true;
}
WantsStatic.ismodify = function(req, res, option, stats, filepath) { // 判断是否让浏览器使用缓存
	var UTC = stats.mtime instanceof Date ? stats.mtime.toUTCString() : stats.mtime.utc
	option.mtime = {
		utc : UTC,
		utcmd5 : _wants_utils.md5(UTC)
	};
	WantsStatic.setHeaders(res, option);
	WantsStatic.mBuffer(filepath, option.mtime); // 更新缓存或建立缓存
	if (_wants_utils.conditionalGET(req) && _wants_utils.modified(req, res)) {
		_wants_utils.notModified(res, option)
		return true;
	}// 如果已经缓存
	else
		return false;
}

WantsStatic.send = module.exports = function(res, filepath, cb) { // 核心函数，主入口
	var option = _wants_utils.merge({}, WantsStatic.option), cb = cb || function() {
	}, req = res._wantsReq, mBuffer = WantsStatic.mtimeBuffer, stype = option.type = mime.lookup(filepath), mtime;
	if (option.getOnly && 'GET' != req.method && 'HEAD' != req.method) {
		var errstr = msg.resmsg.getOnlyError;
		_wants_utils.forbidden(res, errstr);
		return cb(errstr);
	}// 如果不是get请求，则禁止
	if (mtime = mBuffer[filepath]) {// 如果找到2级缓存
		if (WantsStatic.ismodify(req, res, option, {
			mtime : mtime
		}, filepath))
			return cb(); // 响应304，客户端读取缓存
		WantsStatic.sendfiles(req, res, filepath, stype, cb); // 输出文件
	} else { // 如果没有找到2级缓存
		fs.stat(filepath, function(err, stats) {
			if (err) {
				_wants_utils.errorRes404(res, msg.resmsg.notFound);
				return cb(err);
			} else if (stats.isDirectory()) {
				_wants_utils.errorRes404(res, msg.resmsg.notFound);
				return cb(msg.errmsg.staticSendError);
			}
			if (WantsStatic.ismodify(req, res, option, stats, filepath))
				return cb(); // 获取了状态判断是否缓存
			var ranges = req.headers.range;
			if (ranges) {// 如果是ranges
				if (WantsStatic.ranges(res, ranges, stats, cb))
					WantsStatic.sendfiles(req, res, filepath, stype, cb);// 如果ranges合法，则输出
			} else
				WantsStatic.sendfiles(req, res, filepath, stype, cb);// 如果不是ranges，则直接输出
		});
	}
};
WantsStatic.mBuffer = function(key, mtime) {
	var mBuffer = WantsStatic.mtimeBuffer;
	if (!mBuffer[key] && (++mBuffer.length > _wants_config.staticLv2Number)) {
		WantsStatic.clearmBuffer();// 如果mBuffer不存在，并且长度已经超过1000了，清空2级缓存Buffer
	}
	mBuffer[key] = mtime;
};
WantsStatic.clearmBuffer = function() {// 清除2级缓存的方法
	WantsStatic.mtimeBuffer = {
		length : 0,
	}
};
WantsStatic.loopClear = function() { // 定期清空2级缓存
	setInterval(function() {
		WantsStatic.clearmBuffer();
	}, WantsStatic.Lv2MaxAge)
}();