(function () {
    'use strict';

    angular
      .module('app')
      .factory("CalculatorService", CalculatorService);

    function CalculatorService() {

      var factory = {
        cubicYardAmount : cubicYardAmount,
        bucketAmount : bucketAmount,
        bagsToYards : bagsToYards,
        bucketsToYards : bucketsToYards,
        calculateOrderByArea : calculateOrderByArea,
        calculateOrderByBags : calculateOrderByBags,
        calculateOrderByBuckets : calculateOrderByBuckets,
        roundHalf : roundHalf
      };

      function calculateOrderByArea(length, width, depth, selectedProduct, delivered, deliveryFee) {

         var order = {};

         order.yards = cubicYardAmount(length, width, depth);
         order.buckets = bucketAmount(order.yards);
         order.deliveries = Math.ceil(order.buckets / selectedProduct.deliveryLimit);
         order.deliveryCost = (order.buckets > 0) ? order.deliveries * deliveryFee : 0;
         order.totalCost = (order.buckets * selectedProduct.price) + ((delivered) ?  order.deliveryCost : 0);
         order.delivered = delivered;
         order.selectedProduct = selectedProduct;

       return order;
      }

      function calculateOrderByBags(size, count, selectedProduct, delivered, deliveryFee) {

        var order = {};

        order.yards = bagsToYards(size, count);
        order.buckets = bucketAmount(order.yards);
        order.deliveries = Math.ceil(order.buckets / selectedProduct.deliveryLimit);
        order.deliveryCost = (order.buckets > 0) ? order.deliveries * deliveryFee : 0;
        order.totalCost = (order.buckets * selectedProduct.price) + ((delivered) ?  order.deliveryCost : 0);
        order.delivered = delivered;
        order.selectedProduct = selectedProduct;

        return order;

      }

      function calculateOrderByBuckets(buckets, selectedProduct, delivered, deliveryFee) {

        var order = {};

        order.yards = bucketsToYards(buckets);
        order.buckets = bucketAmount(order.yards);
        order.deliveries = Math.ceil(order.buckets / selectedProduct.deliveryLimit);
        order.deliveryCost = (order.buckets > 0) ? order.deliveries * deliveryFee : 0;
        order.totalCost = (order.buckets * selectedProduct.price) + ((delivered) ?  order.deliveryCost : 0);
        order.delivered = delivered;
        order.selectedProduct = selectedProduct;

        return order;
      }

      // Private methods

      function cubicYardAmount(length, width, depth) {

        var yards = 0;

        if (length > 0 && width > 0 && depth > 0) {
          yards = roundHalf(length * width * (depth / 12) / 27);
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

      function bagsToYards(size, count) {
        var yards = 0;

        if (size > 0 && count > 0) {
          yards = roundHalf(((size * count) / 27));
        }

        return yards;
      }

      function bucketsToYards(buckets) {
        var yards = 0;

        if (buckets > 0 && buckets > 0) {
          yards = buckets / 2;
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
