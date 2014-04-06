var fs = require("fs");

var rs = fs.createReadStream("big.txt");
var ws = fs.createWriteStream("output.txt");

ws.on('pipe', function(source){
	console.log('pipe event fired');
	console.log(source === rs);
});

rs.pipe(ws);



