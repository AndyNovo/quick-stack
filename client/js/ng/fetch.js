'use strict';
var thisView = angular.module('ngqs.app', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/app', {
    templateUrl: '/templates/repeat.html',
    controller: 'Ctrl'
  });
}])

.controller('Ctrl', ['$scope', '$http', function($scope, $http) {
    $scope.people = [];
    $http.get("/characters").success(function(people){
      $scope.people = people;
    });
    $scope.addPerson = function(){
        var newPerson = {name: $scope.name || "yaclone"};
        $http.post("/characters", newPerson).success(function(person){
          $scope.people.push(person);
          $scope.name = '';
        });
    };
}]);
