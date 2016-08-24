/// <reference path="Scripts/angular.min.js" />

    var app = angular.module('ownerApp', ['ngRoute']);
    app.config(function ($routeProvider) {
        $routeProvider
         .when('/pets',
            {
                controller: 'petsController',
                templateUrl: '/Views/pets.html'
            })

        .otherwise({ redirectTo: '/pets' });
    });
        
 