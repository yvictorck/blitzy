var app= angular.module('sampleApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'NerdCtrl','ProjsCtrl','AboutCtrl', 'NerdService', 'GeekCtrl', 'GeekService']);

		app.filter('reverse', function() {
			  return function(items) {
			    return items.slice().reverse();
			  };
			});
