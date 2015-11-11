(function() {
  angular
    .module("app")
    .controller("AreaController", AreaController);

  function AreaController($scope, CalculatorService, ProductService) {

    $scope.valueChanged = valueChanged;

    $scope.$parent.title = "Area Calculator";
    $scope.$parent.description = "Use this handy calculator to determine how much product you need for your coverage area.";

    var deliveryFee = 25;

    $scope.length = 0;
    $scope.width = 0;
    $scope.depth = 3;

    $scope.yards = 0;
    $scope.buckets = 0;
    $scope.deliveries = 0;
    $scope.deliveryCost = 0;

    $scope.totalCost = 0;

    $scope.delivered = false;

    $scope.products = ProductService.getProducts();
    $scope.selectedProduct = $scope.products[0];

    valueChanged();

    /*
     * Change this to CalculateOrder()
     * Have it return an order object
     */

    function valueChanged() {
      // CalculatorService.CalculateOrder($scope.length, $scope.width, $scope.depth, $scope);
      $scope.yards = CalculatorService.CubicYardAmount($scope.length, $scope.width, $scope.depth);
      $scope.buckets = CalculatorService.BucketAmount($scope.yards);
      $scope.deliveries = Math.ceil($scope.buckets / $scope.selectedProduct.deliveryLimit);
      $scope.deliveryCost = ($scope.buckets > 0) ? $scope.deliveries * deliveryFee : 0;
      $scope.totalCost = ($scope.buckets * $scope.selectedProduct.price) + (($scope.delivered) ?  $scope.deliveryCost : 0);
    }

  }
})();
