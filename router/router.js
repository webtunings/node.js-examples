var fs = require("fs");
var path = require("path");
var mime = require("mime");
var rootDir = __dirname + '/public';


function routeHandler(pathname, response, tasks){

//static file
if(tasks[pathname] === undefined){
	fileLocation = path.join(rootDir, pathname);
	
		fs.exists(fileLocation, function(exists) {
		if(exists){
			response.setHeader("Content-Type", mime.lookup(path.basename(fileLocation)));	
        		var readStream = fs.createReadStream(fileLocation);
        		readStream.pipe(response);

        		readStream.on('error', function(error){
        		if(error.code === "ENOENT"){
                	response.statusCode=404;
                	response.end('File not found. Error Code = ' + error.code);
        		} else {
                	response.statusCode=500;
                	response.end('Internal Server Error. Error Code = ' + error.code);
        		}
        		});
		}	
		else{
		response.statusCode=404;
		response.end("File not found.");
		}
		});
//non static file
} else {
	tasks[pathname](response);
	}

}

module.exports.routeHandler = routeHandler;
