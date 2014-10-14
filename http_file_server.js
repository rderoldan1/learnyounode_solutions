var fs = require('fs');
var http = require('http');
var port = process.argv[2];

var server = http.createServer(function(request, response){
	var file = fs.createReadStream(process.argv[3])
	file.pipe(response);
})

server.listen(port);