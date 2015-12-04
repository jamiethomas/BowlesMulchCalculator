(function () {
    'use strict';

    angular
      .module('app')
      .factory("CalculatorService", CalculatorService);

    function CalculatorService( CalculatorUtilityService ) {

      var factory = {
        calculateOrderByArea : calculateOrderByArea,
        calculateOrderByBags : calculateOrderByBags,
        calculateOrderByBuckets : calculateOrderByBuckets,
      };

      function calculateOrderByArea(length, width, depth, selectedProduct, delivered, deliveryFee) {

         var order = {};

         order.yards = CalculatorUtilityService.cubicYardAmount(length, width, depth);
         order.buckets = CalculatorUtilityService.bucketAmount(order.yards);
         order.deliveries = Math.ceil(order.buckets / selectedProduct.deliveryLimit);
         order.deliveryCost = (order.buckets > 0) ? order.deliveries * deliveryFee : 0;
         order.totalCost = (order.buckets * selectedProduct.price) + ((delivered) ?  order.deliveryCost : 0);
         order.delivered = delivered;
         order.selectedProduct = selectedProduct;

       return order;
      }

      function calculateOrderByBags(size, count, selectedProduct, delivered, deliveryFee) {

        var order = {};

        order.yards = CalculatorUtilityService.bagsToYards(size, count);
        order.buckets = CalculatorUtilityService.bucketAmount(order.yards);
        order.deliveries = Math.ceil(order.buckets / selectedProduct.deliveryLimit);
        order.deliveryCost = (order.buckets > 0) ? order.deliveries * deliveryFee : 0;
        order.totalCost = (order.buckets * selectedProduct.price) + ((delivered) ?  order.deliveryCost : 0);
        order.delivered = delivered;
        order.selectedProduct = selectedProduct;

        return order;

      }

      function calculateOrderByBuckets(buckets, selectedProduct, delivered, deliveryFee) {

        var order = {};

        order.yards = CalculatorUtilityService.bucketsToYards(buckets);
        order.buckets = CalculatorUtilityService.bucketAmount(order.yards);
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
