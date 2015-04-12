angular.module('BlitzService', []).factory('Blitz', ['$http', function($http) {

	return {
			get : function() {
				return $http.get('/blitz');
			},
			create : function(data) {

				return $http.post('/blitz', data);
			},
			delete : function(id) {
				return $http.delete('/api/blitz/' + id);
			}
		}

}]);



