'use strict';

// Declare app level module which depends on views, and components
angular.module('ngqs', [
  'ngRoute',
  'ngqs.app'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/app'});
}]);