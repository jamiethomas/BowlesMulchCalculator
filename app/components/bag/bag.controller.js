(function() {
  angular
    .module("app")
    .controller("BagController", BagController);

  function BagController($scope, CalculatorService, BagService, ProductService) {

    $scope.valueChanged = valueChanged;

    $scope.title = "Bag Converter";

    $scope.size = 0;
    $scope.count = 0;

    $scope.yards = 0;
    $scope.buckets = 0;
    $scope.deliveries = 0;
    $scope.deliveryFee = 0;
    $scope.totalCost = 0;

    $scope.delivered = false;

    $scope.bags = BagService.getBags();
    $scope.selectedBag = $scope.bags[0];

    $scope.products = ProductService.getProducts();
    $scope.selectedProduct = $scope.products[0];

    valueChanged();

    function valueChanged() {

      var deliveryFee = 25;

      $scope.yards = CalculatorService.BagsToYards($scope.selectedBag.size, $scope.count);
      $scope.buckets = CalculatorService.BucketAmount($scope.yards);
      $scope.deliveries = Math.ceil($scope.buckets / $scope.selectedProduct.deliveryLimit);
      $scope.deliveryFee = ($scope.delivered) ? $scope.deliveries * deliveryFee : 0;
      $scope.totalCost = ($scope.buckets * $scope.selectedProduct.price) + $scope.deliveryFee;
    }

  }
})();
