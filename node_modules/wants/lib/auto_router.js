var baseDir = _wants_config.baseDir + _wants_config.controllerFolderPath + '/'
var autoStatic = _wants_config.autoStatic;
module.exports = function(req, res) {
	try {
		var controllerPath = baseDir + req.path[0];
		var controller = require(controllerPath);
		controller[req.path[1]](req, res);
	} catch (err) {
		_wants_log.error(err);
		res.r404();
	}
};