var app = angular.module('hurricaseIndex', [
    'angular-storage',
    'ngMaterial',
    'ngAnimate'
]);

app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('grey');
});

app.controller('AppCtrl', function($scope, $mdDialog) {
    $scope.showAlert = function(ev) {
        $mdDialog.show(
          $mdDialog.alert()
            .clickOutsideToClose(true)
            .textContent('Your cart is Empty')
            .ariaLabel('Empty Cart')
            .ok('Okay')
            .targetEvent(ev)
        );
    };

    $scope.showConfirm = function(ev) {
        var confirm = $mdDialog.confirm()
              .clickOutsideToClose(true)
              .title('Unable to order product')
              .textContent('Due to immense popularity, the Hurricase is currently unavailable. Please check back when we get more in stock!')
              .ariaLabel('Sold out')
              .targetEvent(ev)
              .ok('Will do!')
              .cancel('Not Interested');

        $mdDialog.show(confirm).then(function() {
        }, function() {
        });
      };

});
