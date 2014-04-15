var http = require("http");

var httpServer = http.createServer(function(request,response){
	//response.write('hello world');
	response.end('hello world');
});

httpServer.listen(8000);
