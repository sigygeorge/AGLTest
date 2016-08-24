
//Retreives the pets
app.factory('petsFactory', function ($http) {
    var factory = {};
    var pets = [];
    factory.getPets = function () {
        $http.get("../handler.ashx").then(function (result) {
            angular.forEach(result.data, function (owner, okey) {
                angular.forEach(owner.pets, function (pet, pkey) {
                    pets.push({ gender: owner.gender, ownerName: owner.name, name: pet.name, type: pet.type })
                });

            });
        }, function (error) {
            alert('Unable to retrieve data from the server. Error: ' + error.status);
        });
        return pets;
    }

    return factory;
});
              