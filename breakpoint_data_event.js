var fs = require("fs");

var readStream = fs.createReadStream("/var/log/kern.log");

readStream.setEncoding('utf8');

function dataEventHandler(chunk){
	console.log(chunk.length);
}


readStream.on('data', dataEventHandler);

readStream.on('end', function(){
	console.log('no more data to read');
});
