var path = require('path'), msg = require('./msg/msg'), fs = require('fs'), baseDir = _wants_config.baseDir;
var respage = function(res, filepath, fn) {
	fs.readFile(baseDir + filepath, 'utf-8', function(err, data) {
		if (err)
			return fn(err);
		res.statusCode = 404;
		res.send(data);
		fn(null, data);
	});
};
var exitsfunc = fs.existsSync || path.existsSync;// 支持0.8版本的api
if (!exitsfunc(baseDir + '/404.html')) {// 如果路径不存在，则创建它
	var out = module.exports = function(res, filepath, fn) {
		var fn = fn || function() {
		};
		if (!filepath) {
			_wants_utils.errorRes404(res);
			fn();
		} else
			respage(res, filepath, fn);
	};
} else {
	var out = module.exports = function(res, filepath, fn) {
		var fn = fn || function() {
		};
		if (!filepath)
			respage(res, '/404.html', fn);
		else
			respage(res, filepath, fn);
	};

}
out.errorres = function(res, fn, errorcode) {
	if (errorcode === 403)
		_wants_utils.forbidden(res);
	else
		_wants_utils.errorRes(res);
	fn && fn();
};
