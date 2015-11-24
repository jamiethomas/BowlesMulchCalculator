(function () {
    'use strict';

    angular
      .module('app')
      .factory("BagService", BagService);

    function BagService() {

      var factory = {
        getBags : getBags,
        getDefaultBag : getDefaultBag
      };

      function getBags() {
        return [
          { name: "1.5 Cubic Feet", size: 1.5 },
          { name: "2 Cubic Feet", size: 2 },
          { name: "3 Cubic Feet", size: 3 }
        ];
      }

      function getDefaultBag() {
        return getBags()[0];
      }

     return factory;
   }
})();
