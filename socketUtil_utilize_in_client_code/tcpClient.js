var net = require("net");
var socketUtil = require("./socketUtil");

var socket = net.connect({port:8080}, function(){
		socket.write('hello from tcp client');
		socketUtil.socketAddress(socket);
		});

//socket.setEncoding('utf8');
socket.on('data', function(data){
		console.log(data.toString());
		socketUtil.socketStats(socket);
		socket.destroy();
	});


socket.on('close', function(){ console.log('close event on tcp client');});

