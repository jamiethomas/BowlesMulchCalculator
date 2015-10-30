(function() {
  angular
    .module("app")
    .controller("HomeController", HomeController);

  function HomeController($scope, CalculatorService, ProductService) {

    $scope.valueChanged = valueChanged;

    $scope.title = "Area";

    $scope.length = 0;
    $scope.width = 0;
    $scope.depth = 3;

    $scope.yards = 0;
    $scope.buckets = 0;
    $scope.deliveries = 0;
    $scope.deliveryFee = 0;
    $scope.totalCost = 0;

    $scope.delivered = false;

    $scope.products = ProductService.getProducts();
    $scope.selectedProduct = $scope.products[0];

    valueChanged();

    function valueChanged() {

      var deliveryFee = 25;

      $scope.yards = CalculatorService.CubicYardAmount($scope.length, $scope.width, $scope.depth);
      $scope.buckets = CalculatorService.BucketAmount($scope.yards);
      $scope.deliveries = Math.ceil($scope.buckets / $scope.selectedProduct.deliveryLimit);
      $scope.deliveryFee = ($scope.delivered) ? $scope.deliveries * deliveryFee : 0;
      $scope.totalCost = ($scope.buckets * $scope.selectedProduct.price) + $scope.deliveryFee;
    }

  }
})();
