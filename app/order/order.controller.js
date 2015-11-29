(function() {
  angular
    .module("app")
    .controller("OrderController", OrderController);

  function OrderController($scope, CONFIG, CalculatorService, ProductService) {

    var vm = this;

    vm.calculateOrder = calculateOrder;

    $scope.vmMain.title = "Order Calculator";
    $scope.vmMain.description = "Use this handy calculator to determine price of your order.";

    vm.buckets = 0;
    vm.delivered = false;

    vm.products = ProductService.getProducts();
    vm.selectedProduct = vm.products[0];

    vm.calculateOrder();

    function calculateOrder() {
      vm.order = CalculatorService.calculateOrderByBuckets(
        vm.buckets,
        vm.selectedProduct,
        vm.delivered,
        CONFIG.DELIVERY_FEE
      );
    }

  }
})();
