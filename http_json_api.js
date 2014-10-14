var http = require('http');
var url = require('url');
var port = process.argv[2];

function buildIsoJson(query){
	var date = new Date(query);
	var json = {
      "hour": date.getHours(),
      "minute": date.getMinutes(),
      "second": date.getSeconds()
    }
	return JSON.stringify(json);
}

function buildUnixJson(query){
	var date = new Date(query);
	var json = {"unixtime": date.getTime()}
	return JSON.stringify(json);
}

var server = http.createServer(function(request,response){
	var path = url.parse(request.url).pathname;
	if(path == '/api/parsetime'){
		response.end(buildIsoJson(url.parse(request.url, true).query.iso));
	}else if (path == '/api/unixtime'){
		response.end(buildUnixJson(url.parse(request.url, true).query.iso));
	}
})


server.listen(port);