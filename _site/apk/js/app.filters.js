// (function(){
    'use strict';
    angular
        .module('starter')
        .filter('range', function(){
            return function(n) {
                var res = [];
                for (var i = 0; i < n; i++) {
                    res.push(i);
                }
                return res;
            };
        })
        .filter('join', function(){
            return function(n) {
                var res = n.join(', ');
                return res;
            };
        })
// })();