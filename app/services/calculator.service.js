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
        BucketsToYards : BucketsToYards,
        CalculateOrderByArea : CalculateOrderByArea,
        CalculateOrderByBags : CalculateOrderByBags,
        CalculateOrderByBuckets : CalculateOrderByBuckets
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

      function BagsToYards(size, count) {
        var yards = 0;

        if (size > 0 && count > 0) {
          yards = Math.round(((size * count) / 27));
        }

        return yards;
      }

      function BucketsToYards(buckets) {
        var yards = 0;

        if (buckets > 0 && buckets > 0) {
          yards = buckets / 2;
        }

        return yards;
      }

      function CalculateOrderByArea(length, width, depth, selectedProduct, delivered, deliveryFee) {

         var order = {};

         order.yards = CubicYardAmount(length, width, depth);
         order.buckets = BucketAmount(order.yards);
         order.deliveries = Math.ceil(order.buckets / selectedProduct.deliveryLimit);
         order.deliveryCost = (order.buckets > 0) ? order.deliveries * deliveryFee : 0;
         order.totalCost = (order.buckets * selectedProduct.price) + ((delivered) ?  order.deliveryCost : 0);
         order.delivered = delivered;
         order.selectedProduct = selectedProduct;

       return order;
      }

      function CalculateOrderByBags(size, count, selectedProduct, delivered, deliveryFee) {

        var order = {};

        order.yards = BagsToYards(size, count);
        order.buckets = BucketAmount(order.yards);
        order.deliveries = Math.ceil(order.buckets / selectedProduct.deliveryLimit);
        order.deliveryCost = (order.buckets > 0) ? order.deliveries * deliveryFee : 0;
        order.totalCost = (order.buckets * selectedProduct.price) + ((delivered) ?  order.deliveryCost : 0);
        order.delivered = delivered;
        order.selectedProduct = selectedProduct;

        return order;

      }

      function CalculateOrderByBuckets(buckets, selectedProduct, delivered, deliveryFee) {

        var order = {};

        order.yards = BucketsToYards(buckets);
        order.buckets = BucketAmount(order.yards);
        order.deliveries = Math.ceil(order.buckets / selectedProduct.deliveryLimit);
        order.deliveryCost = (order.buckets > 0) ? order.deliveries * deliveryFee : 0;
        order.totalCost = (order.buckets * selectedProduct.price) + ((delivered) ?  order.deliveryCost : 0);
        order.delivered = delivered;
        order.selectedProduct = selectedProduct;

        return order;
      }

     return factory;
   }



})();
