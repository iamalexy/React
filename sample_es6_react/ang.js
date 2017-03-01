var map = angular.module('myMap', []);
map.controller('myCtrl',[ '$scope', '$log', '$filter','$timeout', function($scope, $log, $filter,$timeout) {

  $scope.dig ="i want output plz";

  $scope.mad= function() {
    alert("don't mamke me mad");
  };

  console.log($log);
  $log.warn("A warning sign");
  $log.error("An error sign");
  $log.info("lets see what color do we get");
  $log.debug("debug sign");
  $log.log("Hello Walmart");

  $scope.name= "maddy";

  $scope.formatName = $filter('uppercase')($scope.name);

  $log.info($scope.name);
  $log.warn($scope.formatName);

  $scope.hang = " ";

  $scope.may="magi";

  $scope.characters = 7;

  $scope.rules=[

    {rulename: "this is my first rule"},
    {rulename:"second rule"},
    {rulename:"third rule"}

  ];

  console.log($scope.rules);

  /*setTimeout(function() {

    $scope.$apply(function() {
      $scope.name= "whta's happening";
      console.log('changed!');

    });
  }, 3000);*/

  // instead of set timeout we can use $timeout in AngularJS

  $timeout(function() {

    $scope.name="what's happening";
    console.log('changed!');
  }, 3000);






  /*tb= document.getElementById("myId");
  console.log(tb);*/



}]);
