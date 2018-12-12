/*
 *自动响应浏览器favicon.ico请求的模块
 *exports fn(res, path)
 */
var fs = require('fs'), msg = require('./msg/msg');
var icon = {// icon对象
	DefaultPath : _wants_config.baseDir + _wants_config.favicon,
	maxAge : _wants_config.statciMaxAge,
	faviconUrl : _wants_config.favicon,
	icon : false,
};

icon.SendFavicon = module.exports = function favicon(res, path) {// 输出favicon
	var path = path || icon.DefaultPath;
	if (icon.icon)
		return icon.Response(true, res); // 如果有缓存，则输出缓存
	fs.readFile(path, function(err, buf) { // 没有则去读取文件
		if (err)
			return _wants_utils.errorRes(res, msg.resmsg.faviconError); // 出错响应500
		icon.Response(false, res, buf); // 无缓存响应
	});
	return false;
};
icon.Response = function(iscache, res, buf) {// 响应favicon方法
	if (!iscache) {// 如果未缓存
		icon.icon = { // 设置头信息
			headers : {
				'Content-Type' : 'image/x-icon',
				'Content-Length' : buf.length,
				'ETag' : '"' + _wants_utils.md5(buf) + '"',
				'Cache-Control' : 'public, max-age=' + (icon.maxAge / 1000)
			},
			body : buf
		};
	}
	res.writeHead(200, icon.icon.headers);
	res.end(icon.icon.body);
	return true;
}
