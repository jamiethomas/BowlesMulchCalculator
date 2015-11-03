// configure our routes
(function() {
  angular
    .module("app")
    .config(function($routeProvider) {
      $routeProvider

    // route for the home page
    .when('/x', {
      templateUrl : 'pages/home.html',
      controller  : 'mainController'
    })

    // route for the about page
    .when('/about', {
      templateUrl : 'pages/about.html',
      controller  : 'aboutController'
    })

    // route for the contact page
    .when('/contact', {
      templateUrl : 'pages/contact.html',
      controller  : 'contactController'
    })

    // route for bag calculator
    .when('/bags', {
      templateUrl: 'app/components/bag/bag.view.html',
      controller: 'BagController',
      controllerAs: 'ctrl'
    })

    // default route to home page
    .otherwise({
      templateUrl: 'app/components/home/home.view.html',
      controller: 'HomeController',
      controllerAs: 'ctrl'
    });
  });
})();
