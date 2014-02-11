function route(handle, pathname, response, postData){
	console.log('bout to route to' + pathname);
	
	if (typeof handle[pathname] === 'function') {
		return handle[pathname](response, postData);
	} else {
		console.log('no request handler found for' + pathname);
		response.writeHead(404, {'Content-Type' : 'text/plain'});
		response.write("Not found");
		response.end();
	}

}

exports.route = route;