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

     return factory;
   }
})();
