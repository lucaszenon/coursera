(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope){
  $scope.name = "Zenon";
  $scope.sayHello = function () {
    return "Eai seus corno!";


  };
});
})();
