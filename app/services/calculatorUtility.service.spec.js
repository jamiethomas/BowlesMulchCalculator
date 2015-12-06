// Tests using IIFE Syntax
(function () {

  // http://www.scriptscoop.net/t/41ba8825d12a/jasmine-trying-to-test-an-angularjs-service-function.html

  describe("CalculatorUtilityService Tests", function() {
    var testService = null;

    beforeEach(angular.mock.module('app'));

    beforeEach(angular.mock.inject(function(CalculatorUtilityService) {
      testService = CalculatorUtilityService;
    }));

    describe("bagsToYards Tests", function() {

      it("bagsToYards should be defined", function () {
        expect(testService.bagsToYards).toBeDefined();
      });

      it("bagsToYards should handle zero", function () {
        expect(testService.bagsToYards(0, 0)).toBe(0);
      });

      it("bagsToYards should handle negative numbers", function () {
        expect(testService.bagsToYards(-1, -1)).toBe(0);
      });

      it("18 1.5 Cubic Yard Bags should equal 1 yard", function() {
        expect(testService.bagsToYards(1.5, 18)).toBe(1);
      });

      it("13.5 2 Cubic Yard Bags should equal 1 yard", function() {
        expect(testService.bagsToYards(2, 13.5)).toBe(1);
      });

      it("9 3 Cubic Yard Bags should equal 1 yard", function() {
        expect(testService.bagsToYards(3, 9)).toBe(1);
      });

      it("bagsToYards should round up", function() {
        expect(testService.bagsToYards(3, 14)).toBe(1.5);
        expect(bagCheck(3, 14)).toBeGreaterThan(1.5);
      });

      // Check Function for bagsToYards

      function bagCheck(size, count) {
        return (size * count) / 27
      }

    });

    describe("bucketAmount Tests", function() {

      it('bucketAmount should equal double the yard amount', function () {
        for (i = 0; i <= 100; i++) {
          expect(testService.bucketAmount(i)).toBe(i * 2);
        }
      });

      it('bucketAmount should handle zero', function() {
        expect(testService.bucketAmount(0)).toBe(0);
      });

      it('bucketAmount should return zero for negative numbers', function() {
        expect(testService.bucketAmount(-1)).toBe(0);
      });

    });

    describe("bucketsToYards Tests", function() {

      it("bucketsToYards should be defined", function () {
        expect(testService.bucketsToYards).toBeDefined();
      });

      it("bucketsToYards should handle zero", function () {
        expect(testService.bucketsToYards(0)).toBe(0);
      });

      it("bucketsToYards should handle negative numbers", function () {
        expect(testService.bucketsToYards(-1)).toBe(0);
      });

      it("bucketsToYards should NOT round up", function() {
        expect(testService.bucketsToYards(3)).toBe(1.5);
        expect(bucketCheck(3)).toEqual(1.5);

        for (i = 1; i < 100; i++) {
          expect(testService.bucketsToYards(i)).toBe(i / 2);
          expect(bucketCheck(i)).toEqual(i / 2);
        }
      });

      // Check Function for bucketsToYards

      function bucketCheck(buckets) {
        return (buckets) / 2
      }

    });

    describe("cubicYardAmount Tests", function() {

      it("cubicYardAmount should handle zero", function() {
        expect(testService.cubicYardAmount(0, 0, 0)).toBe(0);
      });

      it("cubicYardAmount should handle negative numbers", function() {
        expect(testService.cubicYardAmount(-1, -1, -1)).toBe(0);
        expect(testService.cubicYardAmount(-3, -9, -12)).toBe(0);
      });

      it("cubicYardAmount should do the math correctly", function() {
        expect(testService.cubicYardAmount(3, 9, 12)).toBe(1);
      });

      it("cubicYardAmount should should round up to nearest .5", function() {
        expect(testService.cubicYardAmount(2, 2, 3)).toBe(0);
        expect(yardsCheck(2, 2, 3)).toBeLessThan(0.5);

        expect(testService.cubicYardAmount(3, 3, 12)).toBe(.5);
        expect(yardsCheck(3, 3, 12)).toBeLessThan(0.5);

        expect(testService.cubicYardAmount(3, 5, 12)).toBe(.5);
        expect(yardsCheck(3, 5, 12)).toBeGreaterThan(0.5);

        expect(testService.cubicYardAmount(6, 7, 12)).toBe(1.5);
        expect(yardsCheck(6, 7, 12)).toBeGreaterThan(1.5);

      });

      // Check Function for cubicYardAmount

      function yardsCheck(length, width, depth) {
        return ((length * width * (depth / 12) ) / 27 );
      }

    });

    describe("roundHalf Tests", function() {

      it("roundHalf should be defined", function () {
        expect(testService.roundHalf).toBeDefined();
      });

      it("roundHalf should handle zero", function () {
        expect(testService.roundHalf(0)).toBe(0);
      });

      it("roundHalf should handle negative numbers", function () {
        expect(testService.roundHalf(-1)).toBe(0);
      });

    });

  });

})();
//@ sourceURL=pen.js
