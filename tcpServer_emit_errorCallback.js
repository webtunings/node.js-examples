var net = require('net');

var tcpServer = net.createServer(function(socket){
		console.log('connection established....');
	
		tcpServer.getConnections(function(error,count){
			console.log('number of concurrent tcp connections= '+ count);
		});	
	
		socket.on('end', function(){
			console.log('server disconnected..');
			});
		
		socket.on('close', function(){
			console.log('closed event fired');
			});
	
		socket.on('data', function(data){
			console.log('data received from the tcp client');
			socket.write('Server Reply: ' + data);
			socket.emit('error', new Error('forcefully injected error'));
			});		

		socket.on('error', function(error){
			console.log('something wrong happpened here');
			});

		});

tcpServer.maxConnections=10;

tcpServer.listen(function(){ 
		var port = tcpServer.address().port;
		console.log('server started listening on port: ' + port);
		});


