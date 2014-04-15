var http = require("http");

http.createServer(function(request,response){
	response.write('hello world');
	response.end();
}).listen(8000);
