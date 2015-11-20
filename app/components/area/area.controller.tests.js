// Tests using IIFE Syntax
(function () {

  /* Test Code */
  describe('Area Controller Tests', function () {

    beforeEach(angular.mock.module('app'));

    var $controller;

    beforeEach(angular.mock.inject(function(_$controller_){
      $controller = _$controller_;

      $scope = {};
      $scope.$parent = {};
      testController = $controller('AreaController', { $scope: $scope });
    }));

    it("Check default values", function() {
      expect($scope.$parent.title).toBe("Area Calculator");
      expect($scope.$parent.description).toBe("Use this handy calculator to determine how much product you need for your coverage area.")

      // Form values
      expect($scope.length).toBe(0);
      expect($scope.width).toBe(0);
      expect($scope.depth).toBe(3);
      expect($scope.delivered).toBe(false);

      // Check Order
      expect($scope.order).not.toBe(null);
      expect($scope.order.yards).toBe(0);
      expect($scope.order.buckets).toBe(0);
      expect($scope.order.deliveries).toBe(0);
      expect($scope.order.totalCost).toBe(0);
      expect($scope.order.deliveryCost).toBe(0);

    });

    it("Should handle negative values", function() {
      $scope.length = -1;
      $scope.width = -1;
      $scope.depth = -1;
      $scope.calculateOrder();

      // Caluclated values
      expect($scope.order.yards).toBe(0);
      expect($scope.order.buckets).toBe(0);
      expect($scope.order.deliveries).toBe(0);
      expect($scope.order.totalCost).toBe(0);
      expect($scope.order.deliveryCost).toBe(0);
    });

    it("Should handle calculations correctly for pickup", function() {
      $scope.length = 10;
      $scope.width = 10;
      $scope.depth = 3;
      $scope.calculateOrder();

      // Calculated values
      expect($scope.order.yards).toBe(1);
      expect($scope.order.buckets).toBe(2);
      expect($scope.order.deliveries).toBe(1);
      expect($scope.order.deliveryCost).toBe(25); // Delivery fee is calculated but not applied
      expect($scope.order.totalCost).toBe(30);

    });

    it("Should handle calculations correctly for delivery", function() {
      $scope.length = 10;
      $scope.width = 10;
      $scope.depth = 3;
      $scope.delivered = true;
      $scope.calculateOrder();

      // Calculated values
      expect($scope.order.yards).toBe(1);
      expect($scope.order.buckets).toBe(2);
      expect($scope.order.deliveries).toBe(1);
      expect($scope.order.deliveryCost).toBe(25);
      expect($scope.order.totalCost).toBe(55);

    });
});

})();
//@ sourceURL=pen.js
