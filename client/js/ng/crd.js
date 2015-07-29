'use strict';
var thisView = angular.module('ngqs.app', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/app', {
    templateUrl: '/templates/crd.html',
    controller: 'Ctrl'
  });
}])

.controller('Ctrl', ['$scope', '$http', function($scope, $http) {
    $scope.people = [];
    $http.get("/characters").success(function(people){
      $scope.people = people;
    });
    $scope.destroy = function(person){
      if (person.hasOwnProperty('_id')){
        $http.delete("/characters/"+person._id).success(function(){
          var index = $scope.people.indexOf(person);
          if (index > -1){
            $scope.people.splice(index, 1);
          }
        });
      }
    };
    $scope.addPerson = function(){
      var newPerson = {name: $scope.name || "yaclone"};
      $http.post("/characters", newPerson).success(function(person){
        $scope.people.push(person);
        $scope.name = '';
      });
    };
}]);
