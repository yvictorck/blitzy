angular.module('GeekCtrl', []).controller('GeekController', function($scope, $http, Geek) {

	$scope.tagline = '';	
$scope.emailus = function() {


			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			// people can't just hold enter to keep adding the same to-do anymore
	var atpos = $scope.email.indexOf("@");
    var dotpos = $scope.email.lastIndexOf(".");
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=$scope.email.length) {

        $scope.tagline = "message not sent, need valid email format";
        
    }
    else
    {


				var maildata = {"name":$scope.name,"email":$scope.email,"subject":$scope.subject,"message":$scope.message};

				

				// // call the create function from our service (returns a promise object)
				Geek.postEmail(maildata)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
					   $scope.tagline = "message sent, Thank you!";

					});

	};
	
	}
});