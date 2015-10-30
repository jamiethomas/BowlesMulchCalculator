(function() {
  angular
    .module("app")
    .controller("HomeController", HomeController);

  function HomeController($scope, CalculatorService, ProductService) {
    $scope.length = 10;
    $scope.width = 20;
    $scope.depth = 3;

    $scope.delivered = false;

    $scope.products = ProductService.getProducts();

    $scope.selectedProduct = $scope.products[0];

    $scope.CubicYardAmount = CalculatorService.CubicYardAmount;
    $scope.BucketAmount = CalculatorService.BucketAmount;
    $scope.valueChanged = valueChanged;

    valueChanged();

    function valueChanged() {
      $scope.yards = $scope.CubicYardAmount($scope.length, $scope.width, $scope.depth);
      $scope.buckets = $scope.BucketAmount($scope.yards);
      $scope.deliveries = Math.ceil($scope.buckets / $scope.selectedProduct.deliveryLimit);
      $scope.deliveryFee = $scope.deliveries * 25;
    }

  }
})();
