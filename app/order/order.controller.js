(function() {
  angular
    .module("app")
    .controller("OrderController", OrderController);

  function OrderController($scope, CONFIG, CalculatorService, ProductService) {

    $scope.calculateOrder = calculateOrder;

    $scope.$parent.title = "Order Calculator";
    $scope.$parent.description = "Use this handy calculator to determine price of your order.";

    $scope.buckets = 0;
    $scope.delivered = false;

    $scope.products = ProductService.getProducts();
    $scope.selectedProduct = $scope.products[0];

    calculateOrder();

    function calculateOrder() {
      $scope.order = CalculatorService.CalculateOrderByBuckets(
        $scope.buckets,
        $scope.selectedProduct,
        $scope.delivered,
        CONFIG.DELIVERY_FEE
      );
    }

  }
})();
