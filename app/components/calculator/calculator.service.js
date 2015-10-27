(function () {
    'use strict';

    angular
      .module('app')
      .factory("CalculatorService", CalculatorService);

    function CalculatorService() {

      var factory = {
        CubicYardAmount : CubicYardAmount,
        BucketAmount : BucketAmount
      };

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

     return factory;
   }
})();
