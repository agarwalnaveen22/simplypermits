/*
 *
 *exports log日志记录对象，包含 trace,debug,error 等方法
 */
if (_wants_config.isLog) { // 如果开启日志
	var log4js = require('log4js');// 日志模块加载进来
	log4js.configure({// log4js配置
		"appenders" : [ {
			"category" : _wants_config.server,
			"type" : "logLevelFilter",
			"level" : _wants_config.logLevel,
			"appender" : {
				"type" : "file",
				"filename" : _wants_config.baseDir + _wants_config.logPath + '/wants.log',
				"maxLogSize" : _wants_config.logMaxSize,
				"backups" : _wants_config.logFileNum,
			}
		}, ],
	})// 日志的配置
	var wantslog = module.exports = log4js.getLogger(_wants_config.server);
} else {
	var log = module.exports = {}
	log.trace = log.debug = log.info = log.warn = log.error = log.fatal = function(msg) {
		console.log(msg)
	};

}
