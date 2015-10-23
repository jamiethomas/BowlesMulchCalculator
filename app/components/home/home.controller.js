(function() {
  angular
    .module("app")
    .controller("CalculatorController", CalculatorController);

  function CalculatorController($scope) {
    $scope.length = 0;
    $scope.width = 0;
    $scope.depth = 3;
    $scope.price = 15;
    $scope.delivered = false;
    $scope.deliveryFee = 25;

    $scope.Math = Math;

    $scope.products = [
      { name: "Natural Shredded Hardwood", price: 15, deliveryLimit: 20 },
      { name: "Brown Shredded Hardwood", price: 15, deliveryLimit: 20 },
      { name: "Black Shredded Hardwood", price: 15, deliveryLimit: 20 },
      { name: "Compro", price: 17, deliveryLimit: 12 },
      { name: "Manure", price: 15, deliveryLimit: 12 },
      { name: "Top Soil", price: 15, deliveryLimit: 12 }
    ]

    $scope.selectedProduct = $scope.products[0];

    $scope.CubicYardAmount = CubicYardAmount;
    $scope.BucketAmount = BucketAmount;

    function CubicYardAmount(length, width, depth) {
      return Math.round(length * width * (depth / 12) / 27);
    }

    function BucketAmount(yards) {
      return yards * 2
    }
  }
})();
