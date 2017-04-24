// (function(){
    'use strict';
    angular
        .module('starter')
        .controller('VocabularioController',VocabularioController);

    function VocabularioController($scope,$ionicSlideBoxDelegate,Vocabulario){

        $scope.vocabulario = Vocabulario;
        $scope.slideIndex = 0;

        $scope.first = function() {
            $ionicSlideBoxDelegate.slide(0);
        };

        $scope.next = function() {
            $ionicSlideBoxDelegate.next();
            $scope.slideIndex = $scope.slideIndex;
        };

        $scope.previous = function() {
            $ionicSlideBoxDelegate.previous();
            $scope.slideIndex = $scope.slideIndex;
        };

        $scope.slideChanged = function(index) {
            $scope.slideIndex = index;
            $ionicSlideBoxDelegate.slide(index);
        };

        
        // Appodeal.show(Appodeal.INTERSTITIAL);
        

    }

// })();