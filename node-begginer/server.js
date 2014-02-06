var http = require('http');

http.createServer(function(req, res){
	res.writeHead(200, { 'Content-Type' : 'text/plain'});
	res.write('wudap');
	res.end();
}).listen(8888);