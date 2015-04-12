var app =angular.module('sampleApp', ['ui.router', 'appRoutes', 'ScotchCtrl','MainCtrl', 
	'BlogCtrl','ProjsCtrl','AboutCtrl','BlitzCtrl',
 'BlogService', 'ContactusCtrl', 'ContactusService','BlitzService']);

		app.filter('reverse', function() {
			  return function(items) {
			    return items.slice().reverse();
			  };
			});


