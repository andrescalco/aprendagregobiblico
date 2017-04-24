// (function(){
    'use strict';
    angular
        .module('starter')
        .config(routeConfigurator)
        function routeConfigurator($stateProvider, $urlRouterProvider) {
            
            // Define as rotas da aplicação
            var rotas = [];
                rotas.push('alfabeto');
                rotas.push('vogais');
                rotas.push('ditongos');
                rotas.push('vocabulario');
                rotas.push('jogo');
                rotas.push('jogo-vocabulario');
                rotas.push('sobre');
                rotas.push('casos');
                rotas.push('artigos');
                rotas.push('fontes');
                rotas.push('como-usar');
            
            // referencia o $stateProvider na variavel provider
            var provider = $stateProvider;
            
            // inicia o provider com a rota do menu
            provider.state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html',
            });
            
            // faz um loop, para cada rota e adciona ela no provider
            for (var item in rotas) {
                provider.state('app.'+rotas[item], {
                    url: '/'+rotas[item],
                    views: {
                        'menuContent': {
                            templateUrl: 'templates/'+rotas[item]+'.html'
                        }
                    }
                });                
            }

            // fallback
            $urlRouterProvider.otherwise('/app/alfabeto');
        
        };

// })();