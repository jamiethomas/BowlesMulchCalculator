(function () {
    'use strict';

    angular
      .module('app')
      .factory("ProductService", ProductService);

    function ProductService() {

      var factory = {
        getProducts : getProducts,
        getDefaultProduct : getDefaultProduct,
        getDeliveryFee : getDeliveryFee
      };

      function getProducts() {
        return [
          { name: "Natural Shredded Hardwood", price: 15, deliveryLimit: 20 },
          { name: "Brown Shredded Hardwood", price: 15, deliveryLimit: 20 },
          { name: "Black Shredded Hardwood", price: 15, deliveryLimit: 20 },
          { name: "Compro", price: 17, deliveryLimit: 12 },
          { name: "Manure", price: 15, deliveryLimit: 12 },
          { name: "Top Soil", price: 15, deliveryLimit: 12 }
        ];
      }

      function getDefaultProduct() {
        return getProducts()[0];
      }

      function getDeliveryFee() {
        return 25;
      }

     return factory;
   }
})();
