// (function(){
    'use strict';
    angular
        .module('starter')
        .controller('JogoLetraController',JogoLetraController);

    function JogoLetraController(Alfabeto,$scope,$ionicModal){
        
        /* MODAL */
        $scope.openModal = function(animation) {
            $ionicModal.fromTemplateUrl('templates/modal/vocabulario-modal.html', {
                scope: $scope,
                animation: animation
            }).then(function(modal) {
                $scope.modal = modal;
                $scope.modal.show();
            });
        };

        $scope.closeModal = function() {
            $scope.modal.remove();
        };

        var vm = this;
        vm.alfabeto;
        vm.resposta = {}

        vm.letrasMostradas = [];

        vm.getNext = getNext;
        vm.getRandom = getRandom;
        vm.checkResposta = checkResposta;

        vm.getNext();
        
        function getNext() {

            var index = vm.getRandom(24);
            vm.alfabeto = Alfabeto[index];          

        }

        function getRandom(max) {
            
            var index = Math.floor((Math.random() * max)); 

            if ( vm.letrasMostradas.length == max ) {
                vm.letrasMostradas = [];
            }

            if( vm.letrasMostradas.indexOf(index) == -1 ) {
                vm.letrasMostradas.push(index);
            } else {
                return getRandom(max);
            }

            return index;
        }

        function checkResposta() {
            
            if ( vm.resposta.input.toLowerCase() == vm.alfabeto.resposta ) {
                vm.resposta.input = "";

                $scope.titulo   = 'Resposta correta';
                $scope.conteudo = 'Parabéns! Você acertou a resposta';
                $scope.openModal('slide-in-up');

                vm.getNext();
            } else {
                
                vm.resposta.input = "";
                $scope.titulo   = 'Resposta incorreta';
                $scope.conteudo = 'Não foi desta vez, tente novamente!';
                $scope.openModal('slide-in-up');

            }

        }



    }

// })();