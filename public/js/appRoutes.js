// angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

// 	$routeProvider

// 		// home page
// 		.when('/', {
// 			templateUrl: 'views/home.html',
// 			controller: 'MainController'
// 		})

// 		.when('/blog', {
// 			templateUrl: 'views/nerd.html',
// 			controller: 'NerdController'
// 		})
// 		.when('/projects', {
// 			templateUrl: 'views/projects.html',
// 			controller: 'ProjectsController'
// 		})

// 		.when('/contact', {
// 			templateUrl: 'views/geek.html',
// 			controller: 'GeekController'	
// 		})
// 		.when('/about', {
// 			templateUrl: 'views/about.html',
// 			controller: 'AboutController'	
// 		});

// 	$locationProvider.html5Mode(true);

// }]);


var routerApp = angular.module('appRoutes', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    

// angular.module('appRoutes',[]).config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {


$urlRouterProvider.otherwise('/');
 
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('homie', {
            url: '/homie',
            templateUrl: 'views/partial-home.html'
        })
        
        // nested list with custom controller
        .state('homie.list', {
            url: '/list',
            templateUrl: 'views/partial-home-list.html',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })
        
        // nested list with just some random string data
        .state('homie.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('abouti', {
            url: '/abouti',
            views: {
                '': { templateUrl: 'views/partial-about.html' },
                'columnOne@about': { template: 'Look I am a column!' },
                'columnTwo@about': { 
                    templateUrl: 'views/table-data.html',
                    controller: 'ScotchController'
                }
            }
            
        })
        		// home page
		.state('#', {
			url:'/',
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.state('blog', {
			url:'/blofg',
			templateUrl: 'views/nerd.html',
			controller: 'NerdController'
		})
		.state('projects', {
			url:'/projects',
			templateUrl: 'views/projects.html',
			controller: 'ProjectsController'
		})

		.state('contact', {
			url:'/contact',
			templateUrl: 'views/geek.html',
			controller: 'GeekController'	
		})
		.state('about', {
			url:'/about',
			templateUrl: 'views/about.html',
			controller: 'AboutController'	
		});
        
});