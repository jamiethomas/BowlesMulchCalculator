(function() {
  angular
    .module("app")
    .controller("BagController", BagController);

  function BagController($scope, CONFIG, CalculatorService, BagService, ProductService) {

    var vm = this;

    vm.calculateOrder = calculateOrder;

    $scope.vmMain.title = "Bag Converter";
    $scope.vmMain.description = "Use this handy calculator to determine how much product you need based on the size and number of bags you have used in the past.";

    vm.size = 0;
    vm.count = 0;
    vm.delivered = false;

    vm.bags = BagService.getBags();
    vm.selectedBag = vm.bags[0];

    vm.products = ProductService.getProducts();
    vm.selectedProduct = vm.products[0];

    vm.calculateOrder();

    function calculateOrder() {
      vm.order = CalculatorService.CalculateOrderByBags(
        vm.selectedBag.size,
        vm.count,
        vm.selectedProduct,
        vm.delivered,
        CONFIG.DELIVERY_FEE
      );
    }

  }
})();
