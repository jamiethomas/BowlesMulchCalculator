(function() {
  angular
    .module("app")
    .directive("orderDetails", OrderDetails);

  function OrderDetails() {

    var directive = {
      templateUrl: 'app/components/order/order-details.html',
      restrict: "E",
      scope : {
          order: "="
      }
    };

    return directive;

  }
})();
