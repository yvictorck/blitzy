angular.module('NerdService', []).factory('Nerd', ['$http', function($http) {

	return {
			get : function() {
				return $http.get('/nerds');
			},
			create : function(data) {

				return $http.post('/nerds', data);
			},
			delete : function(id) {
				return $http.delete('/api/todos/' + id);
			}
		}




}]);



