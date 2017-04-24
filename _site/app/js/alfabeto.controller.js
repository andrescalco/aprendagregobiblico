'use strict';
angular
    .module('starter')
    .controller('AlfabetoController',AlfabetoController);

function AlfabetoController($scope, $ionicModal, $timeout,$ionicSlideBoxDelegate,Alfabeto){

    $scope.alfabeto = Alfabeto;

    $scope.first = function() {
        $ionicSlideBoxDelegate.slide(0);
    };

    $scope.next = function() {
        $ionicSlideBoxDelegate.next();
    };

    $scope.previous = function() {
        $ionicSlideBoxDelegate.previous();
    };

    $scope.slideChanged = function(index) {
        console.log(index);
        // $scope.slideIndex = index;
    };

}