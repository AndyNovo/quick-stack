'use strict';
var thisView = angular.module('ngqs.app', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/app', {
    templateUrl: '/templates/databind.html'
  });
}]);