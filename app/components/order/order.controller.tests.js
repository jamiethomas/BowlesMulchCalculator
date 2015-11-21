// Tests using IIFE Syntax
(function () {

  /* Test Code */
  describe('Order Controller Tests', function () {

    beforeEach(angular.mock.module('app'));

    var $controller;

    beforeEach(angular.mock.inject(function(_$controller_){
      $controller = _$controller_;

      $scope = {};
      $scope.$parent = {};
      testController = $controller('OrderController', { $scope: $scope });
    }));

    it("Check default values", function() {
      expect($scope.buckets).toBe(0);
      expect($scope.delivered).toBe(false);
      expect($scope.$parent.title).toBe("Order Calculator");
      expect($scope.$parent.description).toBe("Use this handy calculator to determine price of your order.")

      $scope.calculateOrder();

      expect($scope.order).not.toBe(null);
      expect($scope.order.yards).toBe(0);
      expect($scope.order.buckets).toBe(0);
      expect($scope.order.deliveries).toBe(0);
      expect($scope.order.totalCost).toBe(0);
      expect($scope.order.deliveryCost).toBe(0);
    });

    it("Should handle negative values", function() {
      $scope.buckets = -1;
      $scope.calculateOrder();

      expect($scope.order).not.toBe(null);
      expect($scope.order.yards).toBe(0);
      expect($scope.order.buckets).toBe(0);
      expect($scope.order.deliveries).toBe(0);
      expect($scope.order.totalCost).toBe(0);
      expect($scope.order.deliveryCost).toBe(0);
    });

    it("Should handle calculations correctly for pickup", function() {
      $scope.buckets = 10;
      $scope.calculateOrder();

      expect($scope.order).not.toBe(null);
      expect($scope.order.yards).toBe(5);
      expect($scope.order.buckets).toBe(10);
      expect($scope.order.deliveries).toBe(1);
      expect($scope.order.deliveryCost).toBe(25);
      expect($scope.order.totalCost).toBe(150);

    });

    it("Should handle calculations correctly for delivery", function() {
      $scope.buckets = 10;
      $scope.delivered = true;
      $scope.calculateOrder();

      expect($scope.order).not.toBe(null);
      expect($scope.order.yards).toBe(5);
      expect($scope.order.buckets).toBe(10);
      expect($scope.order.deliveries).toBe(1);
      expect($scope.order.deliveryCost).toBe(25);
      expect($scope.order.totalCost).toBe(175);

    });
});

})();
//@ sourceURL=pen.js
