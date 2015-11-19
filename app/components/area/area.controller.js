(function() {
  angular
    .module("app")
    .controller("AreaController", AreaController);

  function AreaController($scope, CalculatorService, ProductService) {

    $scope.calculateOrder = calculateOrder;

    $scope.$parent.title = "Area Calculator";
    $scope.$parent.description = "Use this handy calculator to determine how much product you need for your coverage area.";

    var deliveryFee = 25;

    $scope.length = 0;
    $scope.width = 0;
    $scope.depth = 3;
    $scope.delivered = false;

    $scope.products = ProductService.getProducts();
    $scope.selectedProduct = $scope.products[0];

    calculateOrder();

    /*
     * Change this to CalculateOrder()
     * Have it return an order object
     */

    function calculateOrder() {
      // CalculatorService.CalculateOrder($scope.length, $scope.width, $scope.depth, $scope);
      order = {};
      order.yards = CalculatorService.CubicYardAmount($scope.length, $scope.width, $scope.depth);
      order.buckets = CalculatorService.BucketAmount(order.yards);
      order.deliveries = Math.ceil(order.buckets / $scope.selectedProduct.deliveryLimit);
      order.deliveryCost = (order.buckets > 0) ? order.deliveries * deliveryFee : 0;
      order.totalCost = (order.buckets * $scope.selectedProduct.price) + (($scope.delivered) ?  order.deliveryCost : 0);
      $scope.order = order;
    }

  }
})();
