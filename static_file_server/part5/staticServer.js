var fs = require("fs");
var path = require("path");
var rootDir = __dirname + "/public";

function serve(pathname, response) {
        var fileLocation;
        fileLocation = path.join(rootDir, pathname);

        var readStream = fs.createReadStream(fileLocation);
        readStream.pipe(response);

}

module.exports.serve = serve;
