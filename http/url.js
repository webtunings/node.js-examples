var http = require("http");
var url = require("url");

function requestHandler (request,response) {
	var data = 'hello';
	var parsed = url.parse(request.url);
        response.writeHead(200, {
                'Content-Type': 'text/plain',
                'Content-Length': data.length});
        response.end(data);
}

http.createServer(requestHandler).listen(8000);

