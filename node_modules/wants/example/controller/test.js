var test = {};
var logger = _wants_log;

test.json = function(req, res) {
	res.sendjson({
		text : "hello wants",
		headers : req.headers,
		param : req.param
	});
}

test.jsonp = function(req, res) {
	res.sendjsonp({
		text : "hello wants",
		headers : req.headers,
		param : req.param
	});
}

test.text = function(req, res) {
	res.send("hello wants ! \n headers: \n" + JSON.stringify(req.headers, true, 2) + "\n  param:" + JSON.stringify(req.param, true, 2));
}

module.exports = test;
