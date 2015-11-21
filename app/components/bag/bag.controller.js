(function() {
  angular
    .module("app")
    .controller("BagController", BagController);

  function BagController($scope, CalculatorService, BagService, ProductService) {

    $scope.calculateOrder = calculateOrder;

    $scope.$parent.title = "Bag Converter";
    $scope.$parent.description = "Use this handy calculator to determine how much product you need based on the size and number of bags you have used in the past.";


    $scope.size = 0;
    $scope.count = 0;
    $scope.delivered = false;

    $scope.bags = BagService.getBags();
    $scope.selectedBag = $scope.bags[0];

    $scope.products = ProductService.getProducts();
    $scope.selectedProduct = $scope.products[0];

    calculateOrder();

    function calculateOrder() {
      $scope.order = CalculatorService.CalculateOrderByBags(
        $scope.selectedBag.size,
        $scope.count,
        $scope.selectedProduct,
        $scope.delivered,
        ProductService.getDeliveryFee()
      );
    }

  }
})();
