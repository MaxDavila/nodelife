function route(handle, pathname){
	console.log('bout to route to' + pathname);
	if (typeof handle[pathname] === 'function')
		handle[pathname]();
	else
		console.log('no request handler found for' + pathname);

}

exports.route = route;