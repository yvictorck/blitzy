angular.module('NerdCtrl', []).controller('NerdController', function($scope,$http, Nerd) {

			Nerd.get().success(function(data) {
				// $scope.todos = data;

				$scope.nerds = data;
			});

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createNerd = function() {



			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			// people can't just hold enter to keep adding the same to-do anymore

				var newNerd = {"name":$scope.name,"note":$scope.note};


				// // call the create function from our service (returns a promise object)
				Nerd.create(newNerd)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
					 //$scope.tagline = newNerd;

					  $scope.nerds.push({
					    name: $scope.name,
					    note: $scope.note
					  });

					});

		};



});