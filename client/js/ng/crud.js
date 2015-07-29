'use strict';
var thisView = angular.module('ngqs.app', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/app', {
    templateUrl: '/templates/crud.html',
    controller: 'Ctrl'
  });
}])

.controller('Ctrl', ['$scope', '$http', function($scope, $http) {
    $scope.people = [];
    $http.get("/characters").success(function(people){
      $scope.people = people;
    });
    $scope.savePerson = function(person){
      if (person.hasOwnProperty('_id')){
        $http.put("/characters/"+person._id, person).success(function(person){
          console.log("person saved: ",person);
        });
      }
    };
    
    $scope.toggleEditMode = function(repeatScope){
      if (!!repeatScope.editMode){
        repeatScope.editMode = false;
      } else {
        repeatScope.editMode = true;
      }
    };
    
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
