var baseDir = _wants_config.baseDir + _wants_config.staticFolderPath + '/'

module.exports = function(req, res) {
	try {
		// 静态文件路由
		res.sendfile(baseDir + req.path[1]);
	} catch (err) {
		_wants_log.error(err);
		res.r404();
	}
};