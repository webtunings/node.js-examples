var httpServer = require("./httpServer");
var routeHandler = require("./router").routeHandler;


httpServer.startServer(routeHandler);

