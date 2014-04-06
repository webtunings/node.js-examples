var fs = require("fs");

var rs = fs.createReadStream("bigJSON.json");
var ws = fs.createWriteStream("destination.json");


rs.pipe(ws,{end: false});

rs.on('end', function(){ console.log('end event read stream'); ws.end('webtunings');});
ws.on('finish', function(){ console.log('finish event write stream');});



