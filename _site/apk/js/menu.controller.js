// (function(){
    'use strict';
    angular
        .module('starter')
        .controller('MenuController',MenuController);

    function MenuController(){
        var vm = this
        vm.menu = [
            {
                nome : 'Lições',
                class : 'item item-divider',
                href : '',
                badge : false,
                active : true
            },
            {
                nome : 'Lição 01: Alfabeto',
                class : 'item',
                href : '#/app/alfabeto',
                badge : false,
                active : true
            },
            {
                nome : 'Lição 02: Vogais',
                class : 'item',
                href : '#/app/vogais',
                badge : false,
                active : true
            },
            {
                nome : 'Lição 03: Ditongos',
                class : 'item',
                href : '#/app/ditongos',
                badge : false,
                active : true
            },
            {
                nome : 'Lição 04: Casos',
                class : 'item',
                href : '#/app/casos',
                badge : false,
                active : true
            },
            {
                nome : 'Lição 05: Artigos',
                class : 'item',
                href : '#/app/artigos',
                badge : false,
                active : true
            },
            {
                nome : 'Lição 06: Verbos',
                class : 'item',
                href : '',
                badge : {
                    color : 'calm',
                    nome : 'Em breve!'
                },
                active : true
            },
            {
                nome : 'Vocabulario',
                class : 'item item-divider',
                href : '#/app/vocabulario',
                badge : false,
                active : true
            },
            {
                nome : 'Vocabulario Grego',
                class : 'item',
                href : '#/app/vocabulario',
                badge : false,
                active : true
            },
            {
                nome : 'Jogos',
                class : 'item item-divider',
                href : '',
                badge : false,
                active : true
            },
            {
                nome : 'Qual é a Letra?',
                class : 'item',
                href : '#/app/jogo',
                badge : {
                    color : 'positive',
                    nome : 'Novo!'
                },
                active : true
            },
            {
                nome : 'Qual é o significado?',
                class : 'item',
                href : '#/app/jogo-vocabulario',
                badge : {
                    color : 'positive',
                    nome : 'Novo!'
                },
                active : true
            },
            {
                nome : 'Ajuda',
                class : 'item item-divider',
                href : '',
                badge : false,
                active : true
            },
            {
                nome : 'Como Usar ?',
                class : 'item',
                href : '#/app/como-usar',
                badge : false,
                active : true
            },
            {
                nome : 'Outras Fontes de Estudo',
                class : 'item',
                href : '#/app/fontes',
                badge : false,
                active : true
            },
            {
                nome : 'Sobre',
                class : 'item',
                href : '#/app/sobre',
                badge : false,
                active : true
            },
        ]

    }

// })();