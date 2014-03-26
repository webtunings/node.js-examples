var net = require('net');
var socketUtil = require("./socketUtil");

var tcpServer = net.createServer(function(socket){
		console.log('connection established....');
		
		socketUtil.socketAddress(socket);
		
		tcpServer.getConnections(function(error,count){
			console.log('number of concurrent tcp connections= '+ count);
			});	
	
		socket.on('end', function(){
			socketUtil.socketStats(socket);
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
		
		socket.setTimeout(20000);

		socket.on('timeout', function(){ socket.end('timed out...');});

		});

tcpServer.maxConnections=10;


//setTimeout(function(){ tcpServer.close(function(){console.log('server closed');})},60000);
			
tcpServer.on('close',function(){ console.log('second server close event handler');});

tcpServer.listen(function(){ 
		var port = tcpServer.address().port;
		console.log('server started listening on port: ' + port);
		});


