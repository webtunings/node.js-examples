var net = require("net");

var tcpServer = net.createServer();

tcpServer.on('connection', function(socket){
	socket.on('data', function(data){ socket.write(data);});
	var listener = socket.listeners('data')[0];
	setTimeout(function(){ socket.removeListener('data',listener);},20000);	
});

tcpServer.listen(8000);
