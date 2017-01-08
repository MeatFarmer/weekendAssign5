console.log('js');

var myApp = angular.module('myApp', []);

myApp.controller( 'PetController', [ '$scope', '$http', function( $scope, $http ){
  console.log( 'NG' );

  $scope.postPet = function() {
          console.log('posting a new Pet');
          var newPet = {
            petName: $scope.petName,
            animalType: $scope.animalType,
            imageUrl: $scope.imageUrl
          };
          $http({
              method: 'POST',
              url: '/newPet',
              data: newPet
          }).then(function(response) {
              console.log('Response from server: ', response);
              $scope.getPet();
          }); // end response
      }; // end postPet



}]); // end controller
