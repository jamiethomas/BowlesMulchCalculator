// Tests using IIFE Syntax
(function () {

  // http://www.scriptscoop.net/t/41ba8825d12a/jasmine-trying-to-test-an-angularjs-service-function.html

  describe("CalculatorService Tests", function() {
    var testService = null;

    beforeEach(angular.mock.module('app'));

    beforeEach(angular.mock.inject(function(CalculatorService) {
      testService = CalculatorService;
    }));

    describe("BucketAmount Tests", function() {

      it('Buckets should equal double the yard amount', function () {
        for (i = 0; i <= 100; i++) {
          expect(testService.BucketAmount(i)).toBe(i * 2);
        }
      });

      it('Buckets should handle zero', function() {
        expect(testService.BucketAmount(0)).toBe(0);
      });

      it('Buckets should return zero for negative numbers', function() {
        expect(testService.BucketAmount(-1)).toBe(0);
      });

    });

  });

})();
//@ sourceURL=pen.js
