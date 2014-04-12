var net = require("net");

var tcpServer = net.createServer();

tcpServer.on('connection', function(socket){
	socket.on('pipe', function(){console.log('pipe event');});
	socket.on('pipe', function(){ setTimeout(function(){ socket.unpipe(socket);},30000);});	
	console.log(socket.listeners('pipe')[1].toString());
	socket.pipe(socket);
});

tcpServer.listen(8000);
