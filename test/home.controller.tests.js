// Tests using IIFE Syntax
(function () {

  /* Test Code */
  describe('Home Controller Tests', function () {

    beforeEach(angular.mock.module('app'));

    var $controller;

    beforeEach(angular.mock.inject(function(_$controller_){
      $controller = _$controller_;
    }));

    describe('Bucket Amount', function () {

      beforeEach(function() {
        $scope = {};
        testController = $controller('HomeController', { $scope: $scope });
      });

      it('Buckets should equal double the yard amount', function () {
        for (i = 0; i <= 100; i++) {
          expect($scope.BucketAmount(i)).toBe(i * 2);
        }
      });

      it('Buckets should handle zero', function() {
        expect($scope.BucketAmount(0)).toBe(0);
      });

      it('Buckets should return zero for negative numbers', function() {
        expect($scope.BucketAmount(-1)).toBe(0);
      });

    });

  });

})();
//@ sourceURL=pen.js
