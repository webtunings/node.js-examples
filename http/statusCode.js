var http = require("http");

http.createServer(function(request,response){
	response.writeHead(404,{'Content-Type': 'text/plain'});
	//response.statusCode=404;
	//response.setHeader('Content-Type', 'text/plain');
	response.write('Page not found\n');
	response.end('bye');
}).listen(8000);
