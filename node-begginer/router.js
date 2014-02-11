function route(handle, pathname, response){
	console.log('bout to route to' + pathname);
	
	if (typeof handle[pathname] === 'function') {
		return handle[pathname](response);
	} else {
		console.log('no request handler found for' + pathname);
		response.writeHead(404, {'Content-Type' : 'text/plain'});
		response.write("Not found");
		response.end();
	}

}

exports.route = route;