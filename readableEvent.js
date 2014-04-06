var fs = require("fs");

var readStream = fs.createReadStream("big.txt");

readStream.setEncoding('utf8');

function read(stats){
 return function(){
	var chunk;
	console.log(stats.count++);
	while(null !==(chunk = this.read())){
	stats.dataRead +=chunk.length;
	console.log(chunk.length);
	console.log(stats.dataRead);
	}
	};
}


readStream.on('readable', read({count:0,dataRead:0}));
readStream.on('end', function(){ console.log('end event');});

