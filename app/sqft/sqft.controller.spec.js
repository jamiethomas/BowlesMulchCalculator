// Tests using IIFE Syntax
(function () {

  /* Test Code */
  describe('Sqft Controller Tests', function () {

    beforeEach(angular.mock.module('app'));

    var $controller;
    var vm;
    var $scope;

    beforeEach(angular.mock.inject(function(_$controller_){
      $controller = _$controller_;

      $scope = {};
      $scope.vmMain = {};
      vm = $controller('SqftController', { $scope: $scope });
    }));

    it("Check default values", function() {
      expect($scope.vmMain.title).toBe("Square Feet Calculator");
      expect($scope.vmMain.description).toBe("Use this handy calculator to determine how much product you need for your coverage area in square feet.")

      // Form values
      expect(vm.sqft).toBe(0);
      expect(vm.width).toBe(1);
      expect(vm.depth).toBe(3);
      expect(vm.delivered).toBe(false);

      // Check Order
      expect(vm.order).not.toBe(null);
      expect(vm.order.yards).toBe(0);
      expect(vm.order.buckets).toBe(0);
      expect(vm.order.deliveries).toBe(0);
      expect(vm.order.totalCost).toBe(0);
      expect(vm.order.deliveryCost).toBe(0);

    });

    it("Should handle negative values", function() {
      vm.sqft = -1;
      vm.width = -1;
      vm.depth = -1;
      vm.calculateOrder();

      // Caluclated values
      expect(vm.order.yards).toBe(0);
      expect(vm.order.buckets).toBe(0);
      expect(vm.order.deliveries).toBe(0);
      expect(vm.order.totalCost).toBe(0);
      expect(vm.order.deliveryCost).toBe(0);
    });

    it("Should handle calculations correctly for pickup", function() {
      vm.sqft = 100;
      vm.width = 1;
      vm.depth = 3;
      vm.calculateOrder();

      // Calculated values
      expect(vm.order.yards).toBe(1);
      expect(vm.order.buckets).toBe(2);
      expect(vm.order.deliveries).toBe(1);
      expect(vm.order.deliveryCost).toBe(40); // Delivery fee is calculated but not applied
      expect(vm.order.totalCost).toBe(30);

    });

    it("Should handle calculations correctly for delivery", function() {
      vm.sqft = 100;
      vm.width = 1;
      vm.depth = 3;
      vm.delivered = true;
      vm.calculateOrder();

      // Calculated values
      expect(vm.order.yards).toBe(1);
      expect(vm.order.buckets).toBe(2);
      expect(vm.order.deliveries).toBe(1);
      expect(vm.order.deliveryCost).toBe(40);
      expect(vm.order.totalCost).toBe(70);

    });
});

})();
//@ sourceURL=pen.js
