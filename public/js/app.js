var app =angular.module('sampleApp', ['ui.router', 'appRoutes', 'ScotchCtrl','MainCtrl', 'BlogCtrl','ProjsCtrl','AboutCtrl', 'BlogService', 'ContactusCtrl', 'ContactusService']);

		app.filter('reverse', function() {
			  return function(items) {
			    return items.slice().reverse();
			  };
			});


