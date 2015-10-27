(function() {
  angular
    .module("app")
    .controller("HomeController", HomeController);

  function HomeController($scope, ProductService) {
    $scope.length = 10;
    $scope.width = 20;
    $scope.depth = 3;
    $scope.price = 15;
    $scope.delivered = false;
    $scope.deliveryFee = 25;

    $scope.Math = Math;

    $scope.products = ProductService.getProducts();

    $scope.selectedProduct = $scope.products[0];

    $scope.CubicYardAmount = CubicYardAmount;
    $scope.BucketAmount = BucketAmount;

    function CubicYardAmount(length, width, depth) {
      return Math.round(length * width * (depth / 12) / 27);
    }

    function BucketAmount(yards) {
      var buckets = 0;
      if (yards > 0) {
        buckets = yards * 2
      }
      return buckets;
    }
  }
})();
