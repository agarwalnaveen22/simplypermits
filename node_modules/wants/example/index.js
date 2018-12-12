var http = require('http');
var util = require("util");
var wants = require("wants");
var logger = _wants_log;
var utils = _wants_utils;

var httpServer = http.createServer(wants());
httpServer.listen(9000, function() {
	logger.debug("wants nodejs framework runing,version:" + utils.getVersion());
});