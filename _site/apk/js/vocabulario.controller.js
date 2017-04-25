// (function(){
    'use strict';
    angular
        .module('starter')
        .controller('VocabularioController',VocabularioController);

    function VocabularioController($ionicSlideBoxDelegate,Vocabulario){
        
        var vm = this;

        vm.vocabulario = Vocabulario;
        
        if (showAD) {
            Appodeal.show(Appodeal.INTERSTITIAL);
        }
        
    }

// })();