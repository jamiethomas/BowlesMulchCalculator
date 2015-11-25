(function() {
  angular
    .module("app")
    .controller("AreaController", AreaController);

  function AreaController($scope, CONFIG, CalculatorService, ProductService) {

    var vm = this;

    this.calculateOrder = calculateOrder;

    $scope.vmMain.title = "Area Calculator";
    $scope.vmMain.description = "Use this handy calculator to determine how much product you need for your coverage area.";

    this.length = 0;
    this.width = 0;
    this.depth = 3;
    this.delivered = false;

    this.products = ProductService.getProducts();
    this.selectedProduct = this.products[0];

    this.calculateOrder();

    function calculateOrder() {
      this.order = CalculatorService.CalculateOrderByArea(
        this.length,
        this.width,
        this.depth,
        this.selectedProduct,
        this.delivered,
        CONFIG.DELIVERY_FEE
      );
    }

  }
})();
