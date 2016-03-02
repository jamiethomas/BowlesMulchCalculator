(function() {
  angular
    .module("app")
    .controller("SqftController", SqftController);

  function SqftController($scope, CONFIG, CalculatorService, ProductService) {

    var vm = this;

    vm.calculateOrder = calculateOrder;

    $scope.vmMain.title = "Square Feet Calculator";
    $scope.vmMain.description = "Use this handy calculator to determine how much product you need for your coverage area in square feet.";

    vm.sqft = 0;
    vm.width = 1;
    vm.depth = 3;
    vm.delivered = false;

    vm.products = ProductService.getProducts();
    vm.selectedProduct = vm.products[0];

    vm.calculateOrder();

    function calculateOrder() {
      vm.order = CalculatorService.calculateOrderByArea(
        vm.sqft,
        vm.width,
        vm.depth,
        vm.selectedProduct,
        vm.delivered,
        CONFIG.DELIVERY_FEE
      );
    }

  }
})();
