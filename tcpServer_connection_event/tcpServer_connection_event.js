var net = require('net');
var socketUtil = require("./socketUtil");

var tcpServer = net.createServer();

tcpServer.on('connection',function(socket){
		console.log('connection established....');
		
		socketUtil.socketAddress(socket);
		
		tcpServer.getConnections(function(error,count){
			console.log('Concurrent tcp connections= '+ count);
			});	
	
		socket.on('end', function(){
			socketUtil.socketStats(socket);
			console.log('end event on socket fired');
			});
		
		socket.on('close', function(){
			console.log('close event on socket fired');
			});
	
		socket.on('data', function(data){
			console.log('data received from the tcp client');
			var flushed = socket.write('Server Reply: ' + data);
			console.log(flushed);
			//socket.emit('error', new Error('forcefully injected error'));
			});		

		socket.on('error', function(error){
			console.log('something wrong happpened here');
			//socket.end('socket can send some more data but it will be ended');
			socket.destroy();
			});
		
		socket.setTimeout(6000000);
		socket.on('timeout', function(){ socket.end('timed out...');});
		});

tcpServer.maxConnections=10;

//setTimeout(function(){ tcpServer.close(function(){console.log('server closed');})},600000);
			
tcpServer.on('close',function(){ console.log('second server close event handler');});

tcpServer.listen(function(){ 
		var port = tcpServer.address().port;
		console.log('server started listening on port: ' + port);
		});

