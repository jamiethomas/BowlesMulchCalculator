(function() {
  angular
    .module("app")
    .controller("AreaController", AreaController);

  function AreaController($scope, CalculatorService, ProductService, CONFIG) {

    $scope.calculateOrder = calculateOrder;

    $scope.$parent.title = "Area Calculator";
    $scope.$parent.description = "Use this handy calculator to determine how much product you need for your coverage area.";

    $scope.length = 0;
    $scope.width = 0;
    $scope.depth = 3;
    $scope.delivered = false;

    $scope.products = ProductService.getProducts();
    $scope.selectedProduct = $scope.products[0];

    calculateOrder();

    function calculateOrder() {
      $scope.order = CalculatorService.CalculateOrderByArea(
        $scope.length,
        $scope.width,
        $scope.depth,
        $scope.selectedProduct,
        $scope.delivered,
        CONFIG.DELIVERY_FEE
      );
    }

  }
})();
