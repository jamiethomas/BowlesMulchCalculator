(function () {
    'use strict';

    angular.module('app').factory('ProductService', ProductService);

    function ProductService() {
        var factory = {
            getProducts: getProducts,
            getDefaultProduct: getDefaultProduct,
        };

        function getProducts() {
            return [
                {
                    name: 'Natural Shredded Hardwood',
                    price: 17,
                    deliveryLimit: 20,
                },
                {
                    name: 'Brown Shredded Hardwood',
                    price: 17,
                    deliveryLimit: 20,
                },
                {
                    name: 'Black Shredded Hardwood',
                    price: 17,
                    deliveryLimit: 20,
                },
            ];

            //{ name: "Manure", price: 15, deliveryLimit: 10 },
        }

        function getDefaultProduct() {
            return getProducts()[0];
        }

        return factory;
    }
})();
