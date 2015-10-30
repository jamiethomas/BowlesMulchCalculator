// Tests using IIFE Syntax
(function () {

  /* Test Code */
  describe('Home Controller Tests', function () {

    beforeEach(angular.mock.module('app'));

    var $controller;

    beforeEach(angular.mock.inject(function(_$controller_){
      $controller = _$controller_;

      $scope = {};
      testController = $controller('HomeController', { $scope: $scope });
    }));

    it("Check default values", function() {
      expect($scope.length).toBe(0);
      expect($scope.width).toBe(0);
      expect($scope.depth).toBe(3);
      expect($scope.delivered).toBe(false);

      expect($scope.yards).toBe(0);
      expect($scope.buckets).toBe(0);
      expect($scope.deliveries).toBe(0);
      expect($scope.deliveryFee).toBe(0);
      expect($scope.totalCost).toBe(0);
    });

    it("Should handle negative values", function() {
      $scope.length = -1;
      $scope.width = -1;
      $scope.depth = -1;
      $scope.valueChanged();

      expect($scope.yards).toBe(0);
      expect($scope.buckets).toBe(0);
      expect($scope.deliveries).toBe(0);
      expect($scope.deliveryFee).toBe(0);
      expect($scope.totalCost).toBe(0);
    });

    it("Should handle calculations correctly for pickup", function() {
      $scope.length = 10;
      $scope.width = 10;
      $scope.depth = 3;
      $scope.valueChanged();

      expect($scope.yards).toBe(1);
      expect($scope.buckets).toBe(2);
      expect($scope.deliveries).toBe(1);
      expect($scope.deliveryFee).toBe(0);
      expect($scope.totalCost).toBe(30);

    });

    it("Should handle calculations correctly for delivery", function() {
      $scope.length = 10;
      $scope.width = 10;
      $scope.depth = 3;
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
