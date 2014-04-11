var fs = require("fs");
var ws = fs.createWriteStream("test");

var isDrained = ws.write('some data', 'utf8', function(){
			console.log('write is done');
		});
console.log(isDrained);
