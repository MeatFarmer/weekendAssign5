console.log('js');

var myApp = angular.module('myApp', []);

myApp.controller( 'PetController', [ '$scope', '$http', function( $scope, $http ){
  console.log( 'NG' );



}]); // end controller
