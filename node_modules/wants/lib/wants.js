var config = require("./config_loader");
_wants_config = config;
var logger = require("./log/logger");
_wants_log = logger;
var utils = require("./utils");
_wants_utils = utils;
// 自动创建目录
if (_wants_config.autoCreateFolders)
	var autoCreateFolders = require('./create_folders');
var bridge = require("./bridge");

// 对request对象再次包装
var Request = require("./request")();

// 对response对象再次包装
var Response = require("./response")();

module.exports = function(callback) {
	return bridge(callback);
};// 输出核心函数

module.exports.config = config;
module.exports.logger = logger;
module.exports.utils = utils;

module.exports.mongo = require('./mongdb_connect');// 输出mongodb api
module.exports.mpool = require('./mongdb_connect').mpool;
module.exports.mgenid = require('./mongdb_connect').mgenid;// 可以生产bson的_id
