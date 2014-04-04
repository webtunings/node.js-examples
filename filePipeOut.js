var fs = require("fs");

var rs = fs.createReadStream("temp.txt")

rs.pipe(process.stdout);
