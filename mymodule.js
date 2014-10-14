 var fs = require('fs');
 var path = require('path')

 module.exports = function(dirname, ext,  callback){
 
  var regx = RegExp('\\.'+ ext + '$')
  	fs.readdir(dirname, function(err, data){
   		if(err){
  			return callback(err, null);
      }
      result = []
  			for(var i = 0; i < data.length; i++){
          if(regx.test(data[i])){
    				result.push(data[i]);
    	  	}		
  		  }
      callback(null, result);
	  });	
};