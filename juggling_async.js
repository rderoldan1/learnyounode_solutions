var bl = require('bl')
var http = require('http');
var responses  = []
var success = 0

function print(){
	for(var i = 0; i < responses.length; i++){
		console.log(responses[i]);
	}
}

function httpGet(index){
	http.get(process.argv[2 + index], function(response){
		response.pipe(bl(function(err, data){
			if(err)
				return console.log(err);
			responses[index] = data.toString();
			success++;
			if(success == process.argv.length - 2 ){
				print();	
			}			
		}))
	})
}

for (var i = 2; i < process.argv.length; i++){
	httpGet(i - 2);
}