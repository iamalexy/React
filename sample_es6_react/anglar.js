var app = angular.module('myApp', ['ngMessages','ngResource']);
app.controller('myContrl',[ '$scope', '$resource', '$timeout','$filter',function($scope,$resource, $timeout, $filter) {
  $scope.msg= "man";

  $scope.newMsg = function() {
    return $filter('uppercase')($scope.msg);
  };

// $timeout we can change the value of the msg dynamically with a particular interval of time.

  $timeout(function() {
    $scope.msg= "don't try";
  }, 3000
);

  $scope.trail="I think you will work";

  $scope.dig="i want output plz";
  $scope.todos= [
    'how does this works',
    'it may work',
    'no idea whats gonna happen'
  ];
  $scope.gym = function() {
    return "fitness";
  };

  console.log($scope);

  $scope.tickClick = function() {
    alert('clicked!!');
  };


  $scope.alertClick= function() {
    alert('Clicked!');
  };

  console.log($resource);

  // $watch is used to check the old and new value which changing over the time.


  $scope.$watch('msg', function(newvalue, oldvalue) {
    console.info('changed!');
    console.log('old:' + oldvalue);
    console.log('new:' +newvalue);
  });




  var arr = [
    1,
    'Aky',
    true,
    function() {
      alert("How r u");
    },
    'Chu'];

  console.log(arr);

  // Inorder to minifi the code, first we need to add services the in the array and the compress it.
  // It looks like the following code.

  /*
  app.controller= angular("myController", [$scope,$log, function($scope,$log){
      console.log($scope);
}]);

here it converts the services into variables like 'a' and 'b'.


  */



}]);
