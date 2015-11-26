// Tests using IIFE Syntax
(function () {

  /* Test Code */
  describe('Bag Controller Tests', function () {

    beforeEach(angular.mock.module('app'));

    var $controller;

    beforeEach(angular.mock.inject(function(_$controller_){
      $controller = _$controller_;

      $scope = {};
      $scope.vmMain = {};
      vm = $controller('BagController', { $scope: $scope });
    }));

    it("Check default values", function() {
      expect(vm.size).toBe(0);
      expect(vm.count).toBe(0);
      expect(vm.delivered).toBe(false);
      expect($scope.vmMain.title).toBe("Bag Converter");
      expect($scope.vmMain.description).toBe("Use this handy calculator to determine how much product you need based on the size and number of bags you have used in the past.")

      vm.calculateOrder();

      expect(vm.order).not.toBe(null);
      expect(vm.order.yards).toBe(0);
      expect(vm.order.buckets).toBe(0);
      expect(vm.order.deliveries).toBe(0);
      expect(vm.order.totalCost).toBe(0);
      expect(vm.order.deliveryCost).toBe(0);
    });

    it("Should handle negative values", function() {
      vm.size = -1;
      vm.count = -1;
      vm.calculateOrder();

      expect(vm.order).not.toBe(null);
      expect(vm.order.yards).toBe(0);
      expect(vm.order.buckets).toBe(0);
      expect(vm.order.deliveries).toBe(0);
      expect(vm.order.totalCost).toBe(0);
      expect(vm.order.deliveryCost).toBe(0);
    });

    it("Should handle calculations correctly for pickup", function() {
      vm.size = 1.5;
      vm.count = 18;
      vm.calculateOrder();

      expect(vm.order).not.toBe(null);
      expect(vm.order.yards).toBe(1);
      expect(vm.order.buckets).toBe(2);
      expect(vm.order.deliveries).toBe(1);
      expect(vm.order.deliveryCost).toBe(25);
      expect(vm.order.totalCost).toBe(30);

    });

    it("Should handle calculations correctly for delivery", function() {
      vm.size = 1.5;
      vm.count = 18;
      vm.delivered = true;
      vm.calculateOrder();

      expect(vm.order).not.toBe(null);
      expect(vm.order.yards).toBe(1);
      expect(vm.order.buckets).toBe(2);
      expect(vm.order.deliveries).toBe(1);
      expect(vm.order.deliveryCost).toBe(25);
      expect(vm.order.totalCost).toBe(55);

    });
});

})();
//@ sourceURL=pen.js
