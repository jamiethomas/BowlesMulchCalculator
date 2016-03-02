// Tests using IIFE Syntax
(function () {

  /* Test Code */
  describe('Order Controller Tests', function () {

    beforeEach(angular.mock.module('app'));

    var $controller;
    var vm;
    var $scope;

    beforeEach(angular.mock.inject(function(_$controller_){
      $controller = _$controller_;

      $scope = {};
      $scope.vmMain = {};
      vm = $controller('OrderController', { $scope: $scope });
    }));

    it("Check default values", function() {
      expect(vm.buckets).toBe(0);
      expect(vm.delivered).toBe(false);
      expect($scope.vmMain.title).toBe("Order Calculator");
      expect($scope.vmMain.description).toBe("Use this handy calculator to determine price of your order.")

      vm.calculateOrder();

      expect(vm.order).not.toBe(null);
      expect(vm.order.yards).toBe(0);
      expect(vm.order.buckets).toBe(0);
      expect(vm.order.deliveries).toBe(0);
      expect(vm.order.totalCost).toBe(0);
      expect(vm.order.deliveryCost).toBe(0);
    });

    it("Should handle negative values", function() {
      vm.buckets = -1;
      vm.calculateOrder();

      expect(vm.order).not.toBe(null);
      expect(vm.order.yards).toBe(0);
      expect(vm.order.buckets).toBe(0);
      expect(vm.order.deliveries).toBe(0);
      expect(vm.order.totalCost).toBe(0);
      expect(vm.order.deliveryCost).toBe(0);
    });

    it("Should handle calculations correctly for pickup", function() {
      vm.buckets = 10;
      vm.calculateOrder();

      expect(vm.order).not.toBe(null);
      expect(vm.order.yards).toBe(5);
      expect(vm.order.buckets).toBe(10);
      expect(vm.order.deliveries).toBe(1);
      expect(vm.order.deliveryCost).toBe(30);
      expect(vm.order.totalCost).toBe(150);

    });

    it("Should handle calculations correctly for delivery", function() {
      vm.buckets = 10;
      vm.delivered = true;
      vm.calculateOrder();

      expect(vm.order).not.toBe(null);
      expect(vm.order.yards).toBe(5);
      expect(vm.order.buckets).toBe(10);
      expect(vm.order.deliveries).toBe(1);
      expect(vm.order.deliveryCost).toBe(30);
      expect(vm.order.totalCost).toBe(180);

    });
});

})();
//@ sourceURL=pen.js
