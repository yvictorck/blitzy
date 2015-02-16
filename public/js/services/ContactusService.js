angular.module('ContactusService', []).factory('Contactus', ['$http', function($http) {

	return {
     postEmail: function(emailData){

     	return $http.post('/contactus', emailData);
 
     }
   }

}]);



