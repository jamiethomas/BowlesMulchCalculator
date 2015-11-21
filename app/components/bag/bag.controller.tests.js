// Tests using IIFE Syntax
(function () {

  /* Test Code */
  describe('Bag Controller Tests', function () {

    beforeEach(angular.mock.module('app'));

    var $controller;

    beforeEach(angular.mock.inject(function(_$controller_){
      $controller = _$controller_;

      $scope = {};
      $scope.$parent = {};
      testController = $controller('BagController', { $scope: $scope });
    }));

    it("Check default values", function() {
      expect($scope.size).toBe(0);
      expect($scope.count).toBe(0);
      expect($scope.delivered).toBe(false);
      expect($scope.$parent.title).toBe("Bag Converter");
      expect($scope.$parent.description).toBe("Use this handy calculator to determine how much product you need based on the size and number of bags you have used in the past.")

      $scope.calculateOrder();

      expect($scope.order).not.toBe(null);
      expect($scope.order.yards).toBe(0);
      expect($scope.order.buckets).toBe(0);
      expect($scope.order.deliveries).toBe(0);
      expect($scope.order.totalCost).toBe(0);
      expect($scope.order.deliveryCost).toBe(0);
    });

    it("Should handle negative values", function() {
      $scope.size = -1;
      $scope.count = -1;
      $scope.calculateOrder();

      expect($scope.order).not.toBe(null);
      expect($scope.order.yards).toBe(0);
      expect($scope.order.buckets).toBe(0);
      expect($scope.order.deliveries).toBe(0);
      expect($scope.order.totalCost).toBe(0);
      expect($scope.order.deliveryCost).toBe(0);
    });

    it("Should handle calculations correctly for pickup", function() {
      $scope.size = 1.5;
      $scope.count = 18;
      $scope.calculateOrder();

      expect($scope.order).not.toBe(null);
      expect($scope.order.yards).toBe(1);
      expect($scope.order.buckets).toBe(2);
      expect($scope.order.deliveries).toBe(1);
      expect($scope.order.deliveryCost).toBe(25);
      expect($scope.order.totalCost).toBe(30);

    });

    it("Should handle calculations correctly for delivery", function() {
      $scope.size = 1.5;
      $scope.count = 18;
      $scope.delivered = true;
      $scope.calculateOrder();

      expect($scope.order).not.toBe(null);
      expect($scope.order.yards).toBe(1);
      expect($scope.order.buckets).toBe(2);
      expect($scope.order.deliveries).toBe(1);
      expect($scope.order.deliveryCost).toBe(25);
      expect($scope.order.totalCost).toBe(55);

    });
});

})();
//@ sourceURL=pen.js
