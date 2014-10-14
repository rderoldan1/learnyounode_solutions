var mymodule = require('./mymodule')

var dir = process.argv[2]
var ext = process.argv[3]
mymodule(dir, ext, function(err, data){
	if(err)
    	return console.error('There was an error:', err)
	
	for(var i = 0; i < data.length; i++){
		console.log(data[i]);
	}	
});