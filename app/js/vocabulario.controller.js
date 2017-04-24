// (function(){
    'use strict';
    angular
        .module('starter')
        .controller('VocabularioController',VocabularioController);

    function VocabularioController($ionicSlideBoxDelegate,Vocabulario){
        
        var vm = this;

        vm.vocabulario = Vocabulario;
        vm.slideIndex = 0;

        vm.pages = 114;
        vm.active = 0;

        vm.first = function() {
            vm.active = 0;
        };

        vm.next = function() {
            if ( vm.active < (vm.pages - 1) ) {
                vm.active += 1;
            } else if (vm.active == vm.pages - 1) {
                vm.active = vm.pages - 1;
            }
        };

        vm.previous = function() {
            if ( vm.active >= 1 ) {
                vm.active -= 1;
            } else if (vm.active == 0) {
                return false;
            }
        };

        vm.slideChanged = function(index) {
            vm.active = parseInt(index);
            
        };



        
        Appodeal.show(Appodeal.INTERSTITIAL);
        

    }

// })();