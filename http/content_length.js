var http = require("http");

http.createServer(function (request, response) {
	var body = 'data from http server';
	response.writeHead(200, {
		'Content-Type': 'text/plain',
		'Content-Length': body.length});
	response.end(body);
}).listen(8000);
