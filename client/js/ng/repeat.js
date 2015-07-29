'use strict';
var thisView = angular.module('ngqs.app', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/app', {
    templateUrl: '/templates/repeat.html',
    controller: 'Ctrl'
  });
}])

.controller('Ctrl', ['$scope', function($scope) {
    $scope.people = [{name: "andy"}, {name: "sara"}];
    $scope.addPerson = function(){
        $scope.people.push({name: $scope.name || "yaclone"});
        $scope.name = '';
    };
}]);
