// (function(){
    'use strict';
    angular
        .module('starter')
        .controller('JogoVocabularioController',JogoVocabularioController);

    function JogoVocabularioController($scope,$ionicSlideBoxDelegate,$ionicModal,Vocabulario,Filler){

        $scope.vocabulario = Vocabulario;
        $scope.filler = Filler;

        $scope.acertos = 0;
        $scope.acertos_consecutivos = 0;
        $scope.jogadas = 0;

        $scope.opcoes = [];
        
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
            $scope.modal.hide();
        };

        //Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });
        // Execute action on hide modal
        $scope.$on('modal.hidden', function() {
            $scope.modal.remove();
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function() {
            $scope.modal.remove();
        });

        var arr = [];
        var total = $scope.vocabulario.length;

        function get_rand() {
            
            if ( arr.length == total ) {
                arr = [];
            }

            var number = Math.floor((Math.random() * total));
            var res; 
            
            if ( arr.indexOf(number) == -1 ) {
                arr.push(number);
                return number;
            } else {
                return get_rand();
            }

        }

        function get_filler() {

            var total = $scope.filler.length;
            var number = Math.floor((Math.random() * total));
            var res = $scope.filler[number];

            res = res.replace(/,/,"");

            return res

        }

        function shuffle(array) {
          var currentIndex = array.length, temporaryValue, randomIndex;

          // While there remain elements to shuffle...
          while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }

          return array;
        }

        $scope.randomLetter = function(){
            
            var number = get_rand();

            $scope.palavra = number;
            
            $scope.opcoes = [];
            var arr = [];

            arr.push(get_filler());
            var index = Math.floor((Math.random() * $scope.vocabulario[number].significados.length));
            arr.push($scope.vocabulario[number].significados[index]);
            arr.push(get_filler());
            arr.push(get_filler());

            arr = shuffle(arr);

            $scope.opcoes = arr;

            $scope.resposta = "";
        }

        $scope.checkResposta = function(resposta){

            $scope.jogadas += 1;

            if ( resposta != '' ) {
                
                var items = $scope.vocabulario[$scope.palavra].significados;
                var acerto = false;

                if ( items.indexOf(resposta.toLowerCase()) >= 0 ) {
                    acerto = true;
                }

                if ( acerto ) {
                    $scope.titulo   = 'Resposta correta';
                    $scope.conteudo = 'Parabéns! Você acertou a resposta';
                    $scope.openModal('slide-in-up');

                    $scope.acertos += 1;
                    $scope.acertos_consecutivos += 1;
                    $scope.randomLetter();

                } else {

                    $scope.acertos_consecutivos = 0;
                    
                    $scope.titulo   = 'Resposta incorreta';
                    $scope.conteudo = 'Não foi desta vez, tente novamente!';
                    $scope.openModal('slide-in-up');
                    
                    $scope.resposta = "";

                }
                

            } else {
                $scope.titulo   = 'Atenção!';
                $scope.conteudo = 'Insira um resposta válida!';
                $scope.openModal('jelly');
            }
            
        }

        // Inicia o random, para pegar uma letra
        $scope.randomLetter();

        if (showAD) {
            Appodeal.show(Appodeal.SKIPPABLE_VIDEO);
        }

    }

// })();