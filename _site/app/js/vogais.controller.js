// (function(){
    'use strict';
    angular
        .module('starter')
        .controller('VogaisController',VogaisController);

    function VogaisController($scope,$ionicSlideBoxDelegate,Alfabeto){

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
            $scope.slideIndex = index;
        };

        if (showAD) {
            Appodeal.show(Appodeal.BANNER);
        }

    }

// })();