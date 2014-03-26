function socketAddress(socket){
	console.log('remote port = ' + socket.remotePort);
	console.log('remote address = ' + socket.remoteAddress);
	console.log('local port = ' + socket.localPort);
	console.log('local address = ' + socket.localAddress);
}


module.exports.socketAddress = socketAddress;
