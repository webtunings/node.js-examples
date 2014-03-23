var http = require('http');
function callback(request,response){
		console.log('client connected');
		response.writeHead(200,{"Content-Type": "text/plain"});
		response.end('webtunings');
		}

var httpServer = http.createServer(callback);

httpServer.listen(8111,function(){console.log('listening...');});
console.log('hello');
