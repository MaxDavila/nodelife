var formidable = require('formidable'),
		http = require('http'),
		url = require('url');

function start(route, handle){
	http.createServer(function(req, res){
		if (req.url == '/upload' && req.method.toLowerCase() == 'post'){
			var form = new formidable.IncomingForm();
			form.parse(req, function(error, fields, files){
				res.writeHead(200, {'content-type' : 'text/plain'});
				res.write('received upload:\n\n');
				res.end(sys.inspect({fields: fields, files: files}));

			});
			return;
		}
		var pathname = url.parse(req.url).pathname;
		var postData = '';

		console.log('Request for' + pathname + 'received')

		req.setEncoding('utf8');
		req.addListener('data', function(postDataChunk) {
			postData += postDataChunk;
			console.log('added some postDataChunk: ' + postDataChunk);
		});

		req.addListener('end', function(){
			route(handle, pathname, res, postData);
		});
	}).listen(8888);

	console.log('server has started yo!');
}

exports.start = start;