angular.module('BlogService', []).factory('Blog', ['$http', function($http) {

	return {
			get : function() {
				return $http.get('/blog');
			},
			create : function(data) {

				return $http.post('/blog', data);
			},
			delete : function(id) {
				return $http.delete('/api/blog/' + id);
			}
		}




}]);



