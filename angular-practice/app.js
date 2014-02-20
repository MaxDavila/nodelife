// to start server: twistd -no web --path .

angular.module('myApp', [])
.service('Flickr', function($http){
	this.getPhotos = function(){
		return $http({
			method: 'GET',
			url: 'http://api.flickr.com/services/rest' ,
			params: {
				method: 'flickr.interestingness.getList',
				api_key: '318a5f46dbb4df4414b7833f7d7369d7',
				format: 'json',
				per_page: 3,
				nojsoncallback: 1
			}
		});
	}
})
.controller('HomeController', function($scope, Flickr){
	$scope.getPhotoUrl = function(photo) {
	  return "http://farm"+photo.farm+
        ".static.flickr.com/"+
        photo.server+"/"+
        photo.id+"_"+photo.secret+".jpg";
	}

	Flickr.getPhotos().then(function(data){
		$scope.photos = data.data.photos.photo;
	})

});