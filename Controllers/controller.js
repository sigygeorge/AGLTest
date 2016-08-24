//PetsController
app.controller('petsController', function ($scope, petsFactory) {
    $scope.pets = petsFactory.getPets();
    var indexedGenders = [];

    $scope.petsToFilter = function () {
        indexedGenders = [];
        return $scope.pets;
    };
          
    //filter for gender
    $scope.filterGenders = function (thisOwner) {
        var isNewGender = indexedGenders.indexOf(thisOwner.gender) == -1;
        if (isNewGender) {
            indexedGenders.push(thisOwner.gender);
        }
        return isNewGender;

    };
});

