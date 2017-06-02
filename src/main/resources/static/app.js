var app = angular.module('hurricaseIndex', [
    'angular-storage',
    'ngMaterial',
    'ngAnimate'
]);

app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('grey');
});
