(function () {
    'use strict';

    angular
      .module('app')
      .factory("CalculatorService", CalculatorService);

    function CalculatorService() {

      var factory = {
        CubicYardAmount : CubicYardAmount,
        BucketAmount : BucketAmount,
        BagsToYards : BagsToYards,
        // CalculateOrder : CalculateOrder
      };

      function CubicYardAmount(length, width, depth) {

        var yards = 0;

        if (length > 0 && width > 0 && depth > 0) {
          yards = Math.round(length * width * (depth / 12) / 27);
        }

        return yards;
      }

      function BucketAmount(yards) {

        var buckets = 0;

        if (yards > 0) {
          buckets = yards * 2
        }

        return buckets;
      }

    //  function CalculateOrder(length, width, depth, $scope) {
    //    $scope.yards = CubicYardAmount(length, width, depth);
    //    $scope.buckets = BucketAmount($scope.yards);
    //    $scope.deliveries = Math.ceil($scope.buckets / $scope.selectedProduct.deliveryLimit);
    //    $scope.deliveryCost = ($scope.buckets > 0) ? $scope.deliveries * deliveryFee : 0;
    //    $scope.totalCost = ($scope.buckets * $scope.selectedProduct.price) + (($scope.delivered) ?  $scope.deliveryCost : 0);
     //
    //    return $scope;
    //  }

     return factory;
   }

   function BagsToYards(size, count) {
     var yards = 0;

     if (size > 0 && count > 0) {
       yards = Math.round(((size * count) / 27));
     }

     return yards;
   }


})();
