'use strict';
angular
    .module('starter')
    .run(function($ionicPlatform){

    	$ionicPlatform.ready(function() {
        	if (window.StatusBar) {
        		if (cordova.platformId == 'android') {
        			StatusBar.backgroundColorByHexString("#A71C1C");
        		}
        	}
    		
    	});

    });