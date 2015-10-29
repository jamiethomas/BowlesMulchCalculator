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

      it('BucketAmount should equal double the yard amount', function () {
        for (i = 0; i <= 100; i++) {
          expect(testService.BucketAmount(i)).toBe(i * 2);
        }
      });

      it('BucketAmount should handle zero', function() {
        expect(testService.BucketAmount(0)).toBe(0);
      });

      it('BucketAmount should return zero for negative numbers', function() {
        expect(testService.BucketAmount(-1)).toBe(0);
      });

    });

    describe("CubicYardAmount Tests", function() {

      it("CubicYardAmount should handle zero", function() {
        expect(testService.CubicYardAmount(0, 0, 0)).toBe(0);
      });

      it("CubicYardAmount should handle negative numbers", function() {
        expect(testService.CubicYardAmount(-1, -1, -1)).toBe(0);
        expect(testService.CubicYardAmount(-3, -9, -12)).toBe(0);
      });

      it("CubicYardAmount should do the math correctly", function() {
        expect(testService.CubicYardAmount(3, 9, 12)).toBe(1);
      });

      it("CubicYardAmount should should round up", function() {
        expect(testService.CubicYardAmount(2, 2, 3)).toBe(0);
        expect(yardsCheck(2, 2, 3)).toBeLessThan(0.5);

        expect(testService.CubicYardAmount(3, 3, 12)).toBe(0);
        expect(yardsCheck(3, 3, 12)).toBeLessThan(0.5);

        expect(testService.CubicYardAmount(3, 5, 12)).toBe(1);
        expect(yardsCheck(3, 5, 12)).toBeGreaterThan(0.5);

        expect(testService.CubicYardAmount(6, 7, 12)).toBe(2);
        expect(yardsCheck(6, 7, 12)).toBeGreaterThan(1.5);

      });

      function yardsCheck(length, width, depth) {
        return ((length * width * (depth / 12) ) / 27 );
      }

    });

  });

})();
//@ sourceURL=pen.js
