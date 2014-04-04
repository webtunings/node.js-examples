var fs = require("fs");

var ws = fs.createWriteStream("out.txt");

process.stdin.pipe(ws);
