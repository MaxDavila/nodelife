var http = require('http');
var url = require('url');

function start(){
	http.createServer(function(req, res){
		var pathname = url.parse(req.url).pathname;
		console.log('Request for' + pathname + 'received')
		res.writeHead(200, { 'Content-Type' : 'text/plain'});
		res.write('wudap');
		res.end();
	}).listen(8888);

	console.log('server has started yo!');
}

exports.start = start;