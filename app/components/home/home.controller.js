(function() {
  angular
    .module("app")
    .controller("HomeController", HomeController);

  function HomeController($scope, CalculatorService, ProductService) {
    $scope.length = 10;
    $scope.width = 20;
    $scope.depth = 3;

    $scope.delivered = false;
    $scope.deliveryFee = 25;

    $scope.products = ProductService.getProducts();

    $scope.selectedProduct = $scope.products[0];

    $scope.CubicYardAmount = CalculatorService.CubicYardAmount;
    $scope.BucketAmount = CalculatorService.BucketAmount;

  }
})();
