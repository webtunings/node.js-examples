function upload(response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.end('uploading');
}

module.exports.upload = upload;
