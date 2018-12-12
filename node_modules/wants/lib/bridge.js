var http = require('http');
var autoRouterFn = require("./auto_router");
var autoRouter = _wants_config.autoRouter;
var autoStaticFn = require("./auto_static");
var autoStatic = _wants_config.autoStatic;
var postLimit = require('./request_post_limit');// post方法的判断
var connectTimeout = _wants_config.connectTimeout;// 连接超时时间
var serverName = _wants_config.server + ' / ' + _wants_config.version;
var poweredBy = _wants_config.poweredBy;
var faviconUrl = _wants_config.favicon;
var merge = _wants_utils.merge;
var isSession = _wants_config.isSession;
// 入口处,这里的callback就是用户编写的回调函数
var bridge = function(req, res, callback) {
	//connectTimeout && http.ClientRequest.prototype.setTimeout.call(req, connectTimeout);// 设置请求超时间，防止一些ddos攻击
	if (req.url === faviconUrl)
		res.favicon(); // 如果是favicon请求，自动响应
	else if (('/' + req.path[0]) === autoStatic && (req.method === 'GET' || req.method === 'HEAD')) {
		// 如果是请求静态文件，自动响应静态文件，这里为了效率只能设定一个静态目录
		autoStaticFn(req, res);// 自动响应静态文件
	} else if (req.method === 'POST' || req.method === 'PUT') {
		// 如果是POST或者PUT提交数据，则需要经过multiform
		postLimit(req, res, function(err, req, res) {
			// 判断post请求是否合理设置了content-length和超过大小
			if (err)
				return _wants_utils.errorRes(res, err);
			req.GetiPostParamFunc(function() {
				var postbody = merge({}, req.bodyparam);
				req.param = merge(merge({}, req.queryparam), postbody);// 解析带点的参数提交
				if (isSession)
					worksession(req, res, callback);
				else
					callback(req, res);
			});
		});
	} else {
		if (isSession)
			worksession(req, res, callback);// 如果打开session支持，则执行以下，会影响效率
		else
			callback(req, res);
	}
}
var worksession = function(req, res, callback) {// 获取session，可根据配置进行内存获取或者mongodb获取
	req.getsession(function(err, sobj) {
		if (err || !sobj) {
			res.gensession({}, function(err, obj) {
				if (!err)
					req.session = obj;
				callback(req, res);
			});
		} else {
			req.session = sobj;
			callback(req, res);
		}
	});
}
var setheader = function(req, res) {
	res._wantsReq = req; // 让res也能取到req对象
	req._wantsRes = res; // 让req也能取到res对象
	res.setHeader('Server', serverName);// 设置通用响应头
	res.setHeader('X-Powered-By', poweredBy);
	req.param = req.queryparam;
}
// 正常入口函数
var entrance = function(cb) {
	var cb = cb || function() {
		// 提供默认cb
	};
	var callback = autoRouter ? autoRouterFn : cb;// 判断是否开启自动路由
	return function(req, res) {
		setheader(req, res);
		bridge(req, res, callback);
	}
}
module.exports = entrance;
module.exports.listen = function(server, port) {// 如果未开启clusterplus，则直接监听
	server.listen(port || _wants_config.listenPort);
}
