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
        CalculateOrderByArea : CalculateOrderByArea
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

      function CalculateOrderByArea(length, width, depth, selectedProduct, delivered) {

       var order = {};

       var deliveryFee = 25; // Make this a parameter

       order.yards = CubicYardAmount(length, width, depth);
       order.buckets = BucketAmount(order.yards);
       order.deliveries = Math.ceil(order.buckets / selectedProduct.deliveryLimit);
       order.deliveryCost = (order.buckets > 0) ? order.deliveries * deliveryFee : 0;
       order.totalCost = (order.buckets * selectedProduct.price) + ((delivered) ?  order.deliveryCost : 0);

       return order;
      }

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
