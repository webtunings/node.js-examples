var http = require("http");

http.createServer(function(request,response){
	response.setHeader('Content-Type', 'text/plain');
	response.write('hello world');
	response.end();
}).listen(8000);
