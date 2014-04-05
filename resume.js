var fs = require("fs");

var readStream = fs.createReadStream("/var/log/kern.log");
//non flowing mode


//make it flowing
readStream.resume();

readStream.on('end', function(){ console.log('end event');});
