var net = require('net');

var tcpServer = net.createServer(function(socket){
		console.log('connection established....');
		
		socket.on('end', function(){
			console.log('server disconnected..');
			});
		
		socket.on('data', function(data){
			console.log('data received from the tcp client');
			socket.write('Server Reply: ' + data);
			});
		});

tcpServer.listen(8111, function(){ console.log('server started listening...');});
