/*
 *MongdbConnect.js 是通用连接池 mongodb 数据库连接文件
 *
 *输出2个函数
 *
 *1、exports = fn，封装好的连接池函数（建议使用）
 *
 *2、exports.mpool 未封装的连接池函数（不建议使用）
 *
 */
var poolModule = require('generic-pool'), mongodb = require('mongodb'), msg = require('./msg/msg');
var Db = mongodb.Db, ReplSetServers = mongodb.ReplSetServers, Connection = mongodb.Connection;
var Server = mongodb.Server, connect = mongodb.pure().connect; // 字符串式连接
var connectString = _wants_config.MongodbConnectString; // 字符串式连接
var defaultdbname = _wants_config.MongodbDefaultDbName, poolLogger = _wants_config.poolLogger;
var MongodbRC = _wants_config.MongodbRC, // 是否使用mongodb副本集
hostarray = [], dbopen = function(callback, dbname) {
	if (connectString) { // 字符串连接mongodb数据库
		var str = dbname || connectString;
		connect(str, function(err, db) {
			callback(err, db);
		})
	} else if (MongodbRC) {
		var ServerArray = [];
		hostarray.forEach(function(v, i) {
			var ser = new Server(v.ip, v.port, {
				auto_reconnect : true
			});
			ServerArray.push(ser);
		});
		var dbname = dbname || defaultdbname, replSet = new ReplSetServers(ServerArray, {
			rs_name : MongodbRC,
			read_secondary : true,
			socketOptions : {}
		}), client = new Db(dbname, replSet, {});
		client.open(function(err, db) {

			callback(err, db);
		});
	} else { // ip 和 端口 连接数据库
		var dbname = dbname || defaultdbname;
		dbserver = new Server(_wants_config.MongodbIp, _wants_config.MongodbPort, {}), client = new Db(dbname, dbserver, {
			w : 1,
			fsync : true
		});
		client.open(function(err, db) {
			callback(err, db);
		})
	}
};

if (_wants_config.isMongodb) { // 如果开启 mongodb 连接
	if (MongodbRC) {// 如果使用的是mongodb副本集的连接,分割ip和端口并验证数据格式
		_wants_config.MongodbRChost.forEach(function(v, i) {
			var vary = v.split(':');
			hostarray.push({
				ip : vary[0],
				port : (vary[1] - 0) || 27017
			});
		});
	}

	var mpool = poolModule.Pool({
		name : 'mongodb',
		create : function(callback, dbname) {
			dbopen(callback, dbname);
		},
		destroy : function(db) {
			db.close();
		}, // 当超时则释放连接
		max : _wants_config.MongodbMaxConnect, // 最大连接数
		idleTimeoutMillis : _wants_config.MongodbConnectTimeout, // 超时时间
		log : poolLogger,
	});

	module.exports = function(callback, priority) {
		mpool.acquire(function(err, db) {
			var release = function() {
				mpool.release(db);
			}; // 设置归还连接的函数
			var genid = function(id) {
				return mgenid(db, id)
			};
			if (err) {
				_wants_log.error(msg.parse(msg.errmsg.dbConnectError + defaultdbname, err)); // 如果出错记录错误日志
				release();
			}
			callback(err, db, release, genid);
		}, priority)
	}
	module.exports.mpool = mpool;
	/*
	 * 生成mongodb _id的方法
	 */
	var mgenid = module.exports.mgenid = function(db, id) {
		try {
			return db.bson_serializer.ObjectID.createFromHexString(id.toString());
		} catch (e) {
			return false;
		}
	}
} else {
	module.exports = module.exports.mpool = function() {
		_wants_log.error(msg.errmsg.dbConfigError);// 提示用户打开mongodb配置
	};
}