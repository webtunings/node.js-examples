var staticServer = require("./staticServer");


function routeHandler(pathname, response, tasks){

//static file
if(tasks[pathname] === undefined){
	//console.log('serving static file: ' + pathname);
	staticServer.serve(pathname,response);
//non static file
} else {
	tasks[pathname](response);
	}
}

module.exports.routeHandler = routeHandler;
