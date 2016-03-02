// configure our routes
(function() {
  angular
    .module("app")
    .config(function($routeProvider) {
      $routeProvider

    // route for the about page
    .when('/about', {
      templateUrl : 'app/about/about.html',
      controller  : 'AboutController',
      controllerAs: 'vm'
    })

    // route for the contact page
    .when('/contact', {
      templateUrl : 'app/contact/contact.html',
      controller  : 'ContactController',
      controllerAs: 'vm'
    })

    // route for square feet calculator
    .when('/sqft', {
      templateUrl: 'app/sqft/sqft.view.html',
      controller: 'SqftController',
      controllerAs: 'vm'
    })

    // route for bag calculator
    .when('/bags', {
      templateUrl: 'app/bag/bag.view.html',
      controller: 'BagController',
      controllerAs: 'vm'
    })

    // route for order calculator
    .when('/order', {
      templateUrl: 'app/order/order.view.html',
      controller: 'OrderController',
      controllerAs: 'vm'
    })

    // default route to home page
    .otherwise({
      templateUrl: 'app/area/area.view.html',
      controller: 'AreaController',
      controllerAs: 'vm'
    });
  });
})();
