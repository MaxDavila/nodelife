var http = require('http');

function start(){
	http.createServer(function(req, res){
		console.log('request received')
		res.writeHead(200, { 'Content-Type' : 'text/plain'});
		res.write('wudap');
		res.end();
	}).listen(8888);

	console.log('server has started yo!');
}

exports.start = start;