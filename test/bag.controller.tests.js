// Tests using IIFE Syntax
(function () {

  /* Test Code */
  describe('Bag Controller Tests', function () {

    beforeEach(angular.mock.module('app'));

    var $controller;

    beforeEach(angular.mock.inject(function(_$controller_){
      $controller = _$controller_;

      $scope = {};
      testController = $controller('BagController', { $scope: $scope });
    }));

    it("Check default values", function() {
      expect($scope.size).toBe(0);
      expect($scope.count).toBe(0);
      expect($scope.delivered).toBe(false);

      expect($scope.yards).toBe(0);
      expect($scope.buckets).toBe(0);
      expect($scope.deliveries).toBe(0);
      expect($scope.deliveryFee).toBe(0);
      expect($scope.totalCost).toBe(0);
    });

    it("Should handle negative values", function() {
      $scope.size = -1;
      $scope.count = -1;
      $scope.valueChanged();

      expect($scope.yards).toBe(0);
      expect($scope.buckets).toBe(0);
      expect($scope.deliveries).toBe(0);
      expect($scope.deliveryFee).toBe(0);
      expect($scope.totalCost).toBe(0);
    });

    it("Should handle calculations correctly for pickup", function() {
      $scope.size = 1.5;
      $scope.count = 18;
      $scope.valueChanged();

      expect($scope.yards).toBe(1);
      expect($scope.buckets).toBe(2);
      expect($scope.deliveries).toBe(1);
      expect($scope.deliveryFee).toBe(0);
      expect($scope.totalCost).toBe(30);

    });

    it("Should handle calculations correctly for delivery", function() {
      $scope.size = 1.5;
      $scope.count = 18;
      $scope.delivered = true;
      $scope.valueChanged();

      expect($scope.yards).toBe(1);
      expect($scope.buckets).toBe(2);
      expect($scope.deliveries).toBe(1);
      expect($scope.deliveryFee).toBe(25);
      expect($scope.totalCost).toBe(55);

    });
});

})();
//@ sourceURL=pen.js
