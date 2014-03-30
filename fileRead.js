var fs = require("fs");

fs.readFile("tcpChat.js",{encoding: "utf8"}, function(error, data){
	console.log(data);
	});

console.log('before read');
