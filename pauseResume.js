var fs = require("fs");

var readStream = fs.createReadStream("big.txt");

readStream.setEncoding('utf8');



readStream.on('data', (function(dataRead){
	return function(chunk){
		dataRead +=chunk.length;
		console.log('data= ' + chunk.length);
		console.log('data read= ' + dataRead);
		readStream.pause();
		setTimeout(function(){ readStream.resume();},100);
	};})(0)
);

readStream.on('end', function(){ console.log('end event');});

