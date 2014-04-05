var fs = require("fs");

var rs = fs.createReadStream("input.txt");
var ws = fs.createWriteStream("output.txt");


rs.pipe(ws);
