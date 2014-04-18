var fs = require("fs");
var path = require("path");
var mime = require("mime");
var rootDir = __dirname + '/public';


function sendStatus(response, statusCode){
	response.statusCode = statusCode;
	response.end('Error');
}


function serve(pathname, response) {
	var fileLocation;
	if(pathname === "/"){
	fileLocation = path.join(rootDir, 'index.html');
	} else {
        fileLocation = path.join(rootDir, pathname);
        }
                fs.stat(fileLocation, function(error,stat) {
		if(error){
			//console.log(fileLocation);
			if(error.code === "ENOENT"){
			sendStatus(response,404);
			} else{
			sendStatus(response,500);
			}
		} else{
                        response.setHeader("Content-Type", mime.lookup(path.basename(fileLocation)));
			//console.log(fileLocation);   
                        var readStream = fs.createReadStream(fileLocation);
			readStream.pipe(response);

                        readStream.on('error', function(error){
                        if(error.code === "ENOENT"){
			sendStatus(response,404);
                        } else {
			sendStatus(response,500);
                        }
                        });
                }       
                });

}

module.exports.serve = serve;
