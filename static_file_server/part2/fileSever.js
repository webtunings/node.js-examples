var http = require("http");
var fs = require("fs");
var url = require("url");
var path = require("path");
var rootDir = __dirname + "/public";
var fileLocation;

var httpServer = http.createServer( function (request, response ) {
	var pathname = url.parse(request.url).pathname;
	fileLocation = path.join(rootDir, pathname);
	
	var readStream = fs.createReadStream(fileLocation);
	readStream.pipe(response);
});

httpServer.listen(8111);
