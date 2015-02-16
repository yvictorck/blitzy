angular.module('BlogCtrl', []).controller('BlogController', function($scope,$http, Blog) {

			Blog.get().success(function(data) {
				// $scope.todos = data;

				$scope.blogposts = data;
			});

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createBlog = function() {



			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			// people can't just hold enter to keep adding the same to-do anymore

				var newBlog = {"title":$scope.title,"content":$scope.content};


				// // call the create function from our service (returns a promise object)
				Blog.create(newBlog)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
					 //$scope.tagline = newBlog;

					  $scope.blogposts.push({
					    title: $scope.title,
					    content: $scope.content
					  });

					});

		};



});