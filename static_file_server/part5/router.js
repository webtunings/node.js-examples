var staticServer = require("./staticServer");


function routeHandler(pathname,response) {
	staticServer.serve(pathname, response);
}

module.exports.routeHandler = routeHandler;
