var net = require("net");

var tcpServer = net.createServer();

tcpServer.on('connection', function(socket){
	socket.once('data', function(data){ socket.write(data);});	
});

tcpServer.listen(8000);
