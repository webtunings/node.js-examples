var fs = require("fs");

var readStream = fs.createReadStream("/var/log/kern.log");

readStream.setEncoding('utf8');

var readEventCount=0;

readStream.on('data', function(chunk){
	console.log(chunk);
	readEventCount++;
});

readStream.on('end', function(){
	console.log('no more data to read');
	console.log(readEventCount);
});
