(function() {
  angular
    .module("app")
    .controller("AreaController", AreaController);

  function AreaController($scope, CONFIG, CalculatorService, ProductService) {

    var vm = this;

    vm.calculateOrder = calculateOrder;

    $scope.vmMain.title = "Area Calculator";
    $scope.vmMain.description = "Use this handy calculator to determine how much product you need for your coverage area.";

    vm.length = 0;
    vm.width = 0;
    vm.depth = 3;
    vm.delivered = false;

    vm.products = ProductService.getProducts();
    vm.selectedProduct = vm.products[0];

    vm.calculateOrder();

    function calculateOrder() {
      vm.order = CalculatorService.calculateOrderByArea(
        vm.length,
        vm.width,
        vm.depth,
        vm.selectedProduct,
        vm.delivered,
        CONFIG.DELIVERY_FEE
      );
    }

  }
})();
