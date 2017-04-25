// (function(){
    'use strict';
    angular
        .module('starter')
        .config(routeConfigurator)
        function routeConfigurator($stateProvider, $urlRouterProvider) {
            
            // Define as rotas da aplicação
            var rotas = [
                {
                    nome : 'alfabeto',
                    rota: 'templates/licoes/001-alfabeto.html'
                },
                {
                    nome : 'vogais',
                    rota: 'templates/licoes/002-vogais.html'
                },
                {
                    nome : 'ditongos',
                    rota: 'templates/licoes/003-ditongos.html'
                },
                {
                    nome : 'casos',
                    rota: 'templates/licoes/004-casos.html'
                },
                {
                    nome : 'artigos',
                    rota: 'templates/licoes/005-artigos.html'
                },
                {
                    nome : 'vocabulario',
                    rota: 'templates/vocabulario/001-vocabulario.html'
                },
                {
                    nome : 'jogo',
                    rota: 'templates/jogos/001-letra.html'
                },
                {
                    nome : 'jogo-vocabulario',
                    rota: 'templates/jogos/002-vocabulario.html'
                },
                {
                    nome : 'como-usar',
                    rota: 'templates/ajuda/001-como-usar.html'
                },
                {
                    nome : 'fontes',
                    rota: 'templates/ajuda/002-outras-fontes.html'
                },
                {
                    nome : 'sobre',
                    rota: 'templates/ajuda/003-sobre.html'
                }
            ];

            // referencia o $stateProvider na variavel provider
            var provider = $stateProvider;
            
            // inicia o provider com a rota do menu
            provider.state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html',
            });
            
            // faz um loop, para cada rota e adciona ela no provider
            for (var ii in rotas) {
                provider.state('app.'+rotas[ii]['nome'], {
                    url: '/'+rotas[ii]['nome'],
                    views: {
                        'menuContent': {
                            templateUrl: rotas[ii]['rota']
                        }
                    }
                });                
            }

            // fallback
            $urlRouterProvider.otherwise('/app/alfabeto');
        
        };

// })();