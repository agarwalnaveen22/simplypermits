/*
 *
 *包含了session的生成，更新，删除和session同步以及mongodb存储
 *
 *并最终统一api，改变session的存储以及同步关系只需要修改配置文件，而无需修改代码
 *
 *exports session对象，包含session的属性和方法
 */
var SessionMongodb = require('../lib/session_mongodb'), msg = require('./msg/msg');
// session存放变量，小型项目或者开发时候用这个，上线建议使用mongodb来存session
var sessionBuffer = {}, WantsSession = {
	isSession : _wants_config.isSession,
	syncSession : _wants_config.syncSession,
	sessionName : _wants_config.sessionName,
	sessionObj : sessionBuffer,
	expire : _wants_config.sessionExpire,
	count : 0,
	stringTag : _wants_config.poweredBy,
	sessionDbStore : _wants_config.sessionDbStore,
	clearTime : _wants_config.clearSessionTime,
	clearSetInteval : _wants_config.clearSessionSetInteval,
	// mongodb support
	genfn : SessionMongodb.gen,
	getfn : SessionMongodb.get,
	updatefn : SessionMongodb.update,
	delfn : SessionMongodb.del,
	clearfn : SessionMongodb.clear,

};
_WantsSession = sessionBuffer; // 将sessionObj设置为全局变量

WantsSession.genSession = function(obj, callback) {// 生成session 变量版本
	var _wantssid = WantsSession._genSession(WantsSession.expire, obj, callback);
	return sessionBuffer[_wantssid];
};
WantsSession.genSessionDb = function(obj, callback) { // 生成session mongodb版本
	WantsSession.genfn(WantsSession.expire, obj, callback);
}

WantsSession._genSession = function(expire, obj, callback) {// 生成session
	// 变量版本，实体函数
	var now = Date.now(), sidstring = now + '' + (WantsSession.count++) + WantsSession.stringTag, // 根据时间戳
	// 和
	// count
	// 生成sessionid
	_wantssid = _wants_utils.md5(sidstring), // md5 字符串生成id
	sobj = sessionBuffer[_wantssid] = obj;
	sobj._wantsexpire = expire;
	sobj._wantstimestamp = now;
	sobj._wantssid = _wantssid;
	callback(null, _wantssid, sobj);
	return _wantssid;
}
WantsSession.updateSession = function(_wantssid, obj) { // 更新session存放变量
	process.nextTick(function() {
		if (sessionBuffer[_wantssid]) {
			var now = Date.now();
			sessionBuffer[_wantssid]._wantstimestamp = now; // 更新时间戳
			WantsSession.sync('_WantsSession["' + _wantssid + '"]=' + JSON.stringify(sessionBuffer[_wantssid])); // 同步session
		}
	});
	return _wantssid;
};
WantsSession.updateSessionDb = function(_wantssid, obj) { // 更新session
	// mongodb版
	WantsSession.updatefn(_wantssid, obj);
}

WantsSession.getSession = function(_wantssid, callback) { // 获得session对象
	var sobj = sessionBuffer[_wantssid];
	if (!sobj) {// 未获取到 session
		callback(msg.errmsg.sessionNoneError);
		return false;
	}
	callback(null, sobj);
	return sobj
}
WantsSession.getSessionDb = function(_wantssid, callback) {// 获得session对象
	// mongodb版
	WantsSession.getfn(_wantssid, callback);
}

WantsSession.delSession = function(_wantssid) { // 删除session
	process.nextTick(function() {
		delete sessionBuffer[_wantssid];
		WantsSession.sync('delete _WantsSession["' + _wantssid + '"]');
	});
};
WantsSession.delSessionDb = function(_wantssid) { // 删除session mongodb版
	WantsSession.delfn(_wantssid);
};

WantsSession.sync = function(data) { // 同步session，如果开启了同步并且同时开启了cluserplus才能使用此功能
	if (WantsSession.syncSession && process.send)
		process.send({
			_sync : true,
			pid : process.pid,
			data : data
		});
};
WantsSession.clearLoop = function() { // 定时清理过期的session，
	setInterval(function() {
		if (WantsSession.sessionDbStore && WantsSession.clearfn)
			WantsSession.clearfn(WantsSession.clearTime);
		else {
			var now = Date.now(), sobj, expire;
			for ( var j in sessionBuffer) {
				sobj = sessionBuffer[j];
				expire = !sobj._wantsexpire ? WantsSession.clearTime : sobj._wantsexpire;
				if (sobj._wantstimestamp + expire < now) {
					delete _WantsSession[j];
					WantsSession.sync('delete _WantsSession["' + j + '"]');
				}
			}
		}
	}, WantsSession.clearSetInteval);
	return arguments.callee;
}();

if (WantsSession.sessionDbStore) { // 如果开启mongodb存储
	module.exports = {
		isSession : WantsSession.isSession,
		sessionDbStore : WantsSession.sessionDbStore,
		sessionName : WantsSession.sessionName,
		expire : WantsSession.expire,
		genSession : WantsSession.genSessionDb,
		updateSession : WantsSession.updateSessionDb,
		getSession : WantsSession.getSessionDb,
		delSession : WantsSession.delSessionDb,
	}
} else { // 正常变量存储
	module.exports = {
		isSession : WantsSession.isSession,
		sessionDbStore : WantsSession.sessionDbStore,
		sessionName : WantsSession.sessionName,
		expire : WantsSession.expire,
		genSession : WantsSession.genSession,
		updateSession : WantsSession.updateSession,
		getSession : WantsSession.getSession,
		delSession : WantsSession.delSession,
	}
}