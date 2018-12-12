/*
 *SessionMongodb.js mongodb存储session对象的i/o操作
 *
 *exports sessionMongodb 对象
 *
 */

var mongo = require('./mongdb_connect'), msg = require('./msg/msg');
var sessionMongodb = module.exports = {
	dbname : _wants_config.MongodbDefaultDbName, // 获取配置的数据库名字
	collection : 'wants_session', // 配置collection名字
};
sessionMongodb.gen = function(expire, obj, callback) { // 生成sessionid
	var obj = obj;
	obj._wantsexpire = expire;
	sessionMongodb.connectCollection(function(err, db, collection, release) {
		if (err)
			return dberror(err, release, callback);// 如果出错
		collection.insert(obj, {
			"safe" : true
		}, function(err, doc) { // 插入session数据
			if (err)
				return dberror(err, release, callback);
			var doc = doc[0], _id = doc._id = doc._id.toString(), sessionid = _wants_utils.md5(_id + sessionMongodb.dbname);// 根据_id和数据库名md5生成sessionid
			doc._wantssid = sessionid;
			collection.update({
				_id : sessionMongodb.genmongodbid(db, _id)
			}, {
				$set : {
					_wantssid : sessionid
				}
			}, function(err) {// 将sessionid更新至文档
				if (err)
					return dberror(err, release, callback);
				else {
					release();
					callback(err, sessionid, doc);
				}
			});
		});
	});
};
sessionMongodb.update = function(_wantssid, obj) { // 更新session
	if (!sessionMongodb.checksid(_wantssid))
		return; // 如果sid不符合规范，跳出程序
	var obj = obj;
	obj._wantstimestamp = Date.now();// 更新时间戳
	delete obj._id; // 删除_id，防止出错
	sessionMongodb.connectCollection(function(err, db, collection, release) {
		if (err)
			return dberror(err, release);
		collection.update({
			_wantssid : _wantssid
		}, {
			$set : obj
		}, {
			"safe" : true
		}, function(err, doc) {
			if (err)
				return dberror(err, release);
			else
				release();
		});
	});
};
sessionMongodb.get = function(_wantssid, callback) {
	if (!sessionMongodb.checksid(_wantssid))
		return callback(msg.errmsg.sessionDbIdError);// 如果sid不符合规范，则输出错误
	sessionMongodb.connectCollection(function(err, db, collection, release) {
		if (err)
			return dberror(err, release, callback);
		collection.findOne({
			_wantssid : _wantssid
		}, function(err, doc) {
			if (err)
				return dberror(err, release, callback);
			else {
				release();
				callback(err, doc); // 返回查询出的session文档给callback
			}
		});
	});
};
sessionMongodb.del = function(_wantssid) { // 删除session
	if (!sessionMongodb.checksid(_wantssid))
		return;// 检查sid是否合法
	sessionMongodb.connectCollection(function(err, db, collection, release) {
		if (err)
			return dberror(err, release);
		collection.remove({
			_wantssid : _wantssid
		}, {
			"safe" : true
		}, function(err, count) {
			if (err)
				return dberror(err, release);
			else
				release();
		});
	});
};
sessionMongodb.clear = function(clearTime) { // 循环执行的，根据expire，删除指定session
	var now = Date.now(), expire = now - clearTime;
	sessionMongodb.connectCollection(function(err, db, collection, release) {
		if (err)
			return dberror(err, release);
		collection.find({
			"_wantstimestamp" : {
				$lte : expire
			}
		}).toArray(function(err, result) {
			if (err)
				return dberror(err, release);
			result.forEach(function(value) {
				process.nextTick(function() {
					sessionMongodb.del(value._wantssid);
				})
			})
			release();
		});
	});
};

sessionMongodb.checksid = function(sid) {// 判断sessionid是否合法
	if (!/^[A-Za-z0-9]{32,32}$/.test(sid))
		return false;
	return true;
}
sessionMongodb.genmongodbid = function(db, id) {
	try {
		return db.bson_serializer.ObjectID.createFromHexString(id);
	} catch (e) {
		return false;
	}
}

sessionMongodb.connectCollection = function(callback) { // 获取保存 session
	// 的collection
	try {
		mongo(function(err, db, release) {// Caution release!
			if (err)
				return callback(err);
			db.collection(sessionMongodb.collection, function(err, collection) {
				callback(err, db, collection, release)
			});
		}, sessionMongodb.dbname);
	} catch (err) {
	}
};

sessionMongodb.ensureIndex = function() { // 将sid作为索引，加速monogdb操作
	if (!_wants_config.sessionDbStore)
		return;
	sessionMongodb.connectCollection(function(err, db, collection, release) {
		if (err)
			return _wants_log.error(msg.parse(msg.errmsg.sessionDbProcessError, err));
		collection.ensureIndex({
			"_wantssid" : 1
		}, function(err, r) {
			release();
		})
	})
}()

var dberror = function(err, release, callback) { // 归还通用连接，出错调用，记录数据库错误日志
	release();
	_wants_log.error(msg.parse(msg.errmsg.sessionDbCommonError, err));
	callback && callback(err);
}