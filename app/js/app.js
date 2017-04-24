/*

export ANDROID_HOME=/home/andre/android/android-sdk-linux && export PATH=${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
sudo ionic upload --note "Teste" --deploy=production


export ANDROID_HOME=/home/andre/android/android-sdk-linux && export PATH=${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools

cordova build --release android

cd /var/sites/alfabeto/platforms/android/build/outputs/apk/


jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore app-grego-biblico-key.keystore android-release-unsigned.apk app_grego_biblico
/home/andre/android/android-sdk-linux/build-tools/23.0.2/zipalign -v 4 android-release-unsigned.apk aprenda-grego-biblico.apk

*/
angular
	.module('starter', ['ionic','ionic-material'])
    .run(function($ionicPlatform){

    	$ionicPlatform.ready(function() {
        	if (window.StatusBar) {
        		if (cordova.platformId == 'android') {
        			StatusBar.backgroundColorByHexString("#A71C1C");
        		}
        	}
   		
    	});

    });