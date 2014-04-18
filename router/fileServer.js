var httpServer = require("./httpServer");
var routeHandler = require("./router").routeHandler;
var tasksHandlers = require("./taskHandlers");

var tasks= {};
tasks["/upload"] = tasksHandlers.upload;


httpServer.startServer(routeHandler,tasks);



