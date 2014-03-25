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
			console.log('closed event on socket fired');
			});
	
		socket.on('data', function(data){
			console.log('data received from the tcp client');
			socket.write('Server Reply: ' + data);
			//socket.emit('error', new Error('forcefully injected error'));
			});		

		socket.on('error', function(error){
			console.log('something wrong happpened here');
			//socket.end('socket can send some more data but it will be ended');
			socket.destroy();
			});

		});

tcpServer.maxConnections=10;


setTimeout(function(){ tcpServer.close(function(){console.log('server closed');})},60000);
			
tcpServer.on('close',function(){ console.log('second server close event handler');});

tcpServer.listen(function(){ 
		var port = tcpServer.address().port;
		console.log('server started listening on port: ' + port);
		});


