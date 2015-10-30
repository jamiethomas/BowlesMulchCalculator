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

    $scope.valueChanged = valueChanged;

    valueChanged();

    function valueChanged() {
      $scope.yards = CalculatorService.CubicYardAmount($scope.length, $scope.width, $scope.depth);
      $scope.buckets = CalculatorService.BucketAmount($scope.yards);
      $scope.deliveries = Math.ceil($scope.buckets / $scope.selectedProduct.deliveryLimit);
      $scope.deliveryFee = $scope.deliveries * 25;
      $scope.totalCost = $scope.buckets * $scope.selectedProduct.price + ($scope.delivered && $scope.buckets > 0 ? $scope.deliveryFee : 0);
    }

  }
})();
