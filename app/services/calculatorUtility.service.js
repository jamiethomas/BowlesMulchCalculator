(function () {
    'use strict';

    angular
      .module('app')
      .factory("CalculatorUtilityService", CalculatorUtilityService);

    function CalculatorUtilityService() {

      var factory = {
        bagsToYards : bagsToYards,
        bucketAmount : bucketAmount,
        bucketsToYards : bucketsToYards,
        cubicYardAmount : cubicYardAmount,
        roundHalf : roundHalf
      };

      function bagsToYards(size, count) {
        var yards = 0;

        if (size > 0 && count > 0) {
          yards = roundHalf(((size * count) / 27));
        }

        return yards;
      }

      function bucketAmount(yards) {

        var buckets = 0;

        if (yards > 0) {
          buckets = yards * 2
        }

        return buckets;
      }

      function bucketsToYards(buckets) {
        var yards = 0;

        if (buckets > 0 && buckets > 0) {
          yards = buckets / 2;
        }

        return yards;
      }

      function cubicYardAmount(length, width, depth) {

        var yards = 0;

        if (length > 0 && width > 0 && depth > 0) {
          yards = roundHalf(length * width * (depth / 12) / 27);
        }

        return yards;
      }

      function roundHalf(num) {
        var result = 0;

        if (num > 0) {
          result = Math.round(num * 2) / 2;
        }

        return result;
      }

     return factory;
   }

})();
