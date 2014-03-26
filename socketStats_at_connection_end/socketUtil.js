function socketAddress(socket){
	console.log('remote port = ' + socket.remotePort);
	console.log('remote address = ' + socket.remoteAddress);
	console.log('local port = ' + socket.localPort);
	console.log('local address = ' + socket.localAddress);
}


function socketStats(socket){
	console.log('bytes read: ' + socket.bytesRead);
	console.log('bytes written: ' + socket.bytesWritten);
}

module.exports.socketAddress = socketAddress;
module.exports.socketStats = socketStats;
