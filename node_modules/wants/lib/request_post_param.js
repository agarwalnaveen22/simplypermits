var qs = require('qs');
var msg = require('./msg/msg'), genparamdot = require('./request_param');

var PostParam = function(req, callback) {
	var queryData = "";
	req.on('data', function(data) {
		queryData += data;
		if (queryData.length > 1e6) {
			queryData = "";
			_wants_utils.errorRes(req._wantsRes, msg.resmsg.postError2);
			req.connection.destroy();
		}
	});
	req.on('end', function() {
		req._wantsPostData = genparamdot(qs.parse(queryData));
		callback();
	});

};
module.exports = PostParam;