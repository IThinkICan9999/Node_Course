	var exec = require("child_process").exec;
	
	function start(response) {
		console.log("Request handler 'start' was called. ");
		var content = "empty";
		
		exec("dir /od", function(error, stdout, stderr) {
			response.writeHead(200, {"Content-Type" : "text/plain"});
			response.write(stdout);
			response.end();
		});
		
	}
	
	function upload(response) {
	console.log("Request handler 'upload' was called. ");
	reponse.writeHead(200, {"Content-Type" : "text/plain"});
	
	response.write("Clown riot.");
	response.end();
	}
	exports.start = start;
	exports.upload = upload;