var net = require("net");


var socket = net.connect({port:8080}, function(){
		socket.write('hello from tcp client');
		});

//socket.setEncoding('utf8');
socket.on('data', function(data){
		console.log(data.toString());
		socket.destroy();
	});


socket.on('close', function(){ console.log('close event on tcp client');});

