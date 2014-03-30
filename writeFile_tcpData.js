var fs = require("fs");
var net = require("net");


var tcpServer = net.createServer();

tcpServer.on('connection', function(socket){
	console.log('connection established');
	
	socket.on('data', function(data){
	fs.appendFile('data.txt', data, function(error){
		console.log('data written');
		});
	});
});

tcpServer.listen(8000);
