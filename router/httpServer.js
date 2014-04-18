var http = require("http");
var url = require("url");

function startServer(routeHandler,tasks){

var httpServer = http.createServer(function (request, response) {
	var pathname = url.parse(request.url).pathname;
	//console.log(pathname);
	routeHandler(pathname, response,tasks);
});

httpServer.listen(8000);

}

module.exports.startServer = startServer;
