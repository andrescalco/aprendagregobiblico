'use strict';
angular
    .module('starter')
    .run(function($ionicPlatform,$compileProvider,$logProvider,$ionicConfigProvider){

    	$ionicPlatform.ready(function() {
        	if (window.StatusBar) {
        		if (cordova.platformId == 'android') {
        			StatusBar.backgroundColorByHexString("#A71C1C");
        		}
        	}
    		
    	});

        $compileProvider.debugInfoEnabled(false);
        $compileProvider.commentDirectivesEnabled(false);
        $compileProvider.cssClassDirectivesEnabled(false);
        $logProvider.debugEnabled(false);
        $ionicConfigProvider.scrolling.jsScrolling(false);

    });