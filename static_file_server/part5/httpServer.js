var http = require("http");
var url = require("url");

function startServer(routeHandler){

var httpServer = http.createServer( function (request, response ) {
        var pathname = url.parse(request.url).pathname;
        routeHandler(pathname,response);
	
});

httpServer.listen(8111);
}

module.exports.startServer = startServer;


