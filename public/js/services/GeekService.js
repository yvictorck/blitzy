angular.module('GeekService', []).factory('Geek', ['$http', function($http) {

	return {
     postEmail: function(emailData){

     	return $http.post('/contactus', emailData);
 
     }
   }

}]);



