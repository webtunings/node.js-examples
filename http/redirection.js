var http = require("http");

http.createServer(function (request, response) {
	var body = 'redirecting';
	response.writeHead(302, {
		'Content-Type': 'text/plain',
		'Location': 'http://www.webtunings.com',
		'Content-Length': body.length});
	response.end(body);
}).listen(8000);
