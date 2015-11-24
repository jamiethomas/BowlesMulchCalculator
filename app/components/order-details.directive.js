(function() {
  angular
    .module("app")
    .directive("orderDetails", OrderDetails);

  function OrderDetails() {

    var directive = {
      templateUrl: 'app/components/order-details.directive.html',
      restrict: "A",
      scope : {
          order: "=orderDetails"
      }
    };

    return directive;

  }
})();
