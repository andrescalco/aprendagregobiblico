angular
	.module('starter')
	.directive('slider', function($timeout) {
	return {
		restrict: 'AE',
		replace: true,
		scope: {
			items: '=',
			select: '=',
		},
		link: function(scope, elem, attrs) {

			var vm = scope;

			vm.pages = 114;
			vm.active = 0;

			vm.first = function() {
				vm.active = 0;
			};

			vm.next = function() {
				if ( vm.active < (vm.pages - 1) ) {
					vm.active += 1;
				} else if (vm.active == vm.pages - 1) {
					vm.active = vm.pages - 1;
				}
			};

			vm.previous = function() {
				if ( vm.active >= 1 ) {
					vm.active -= 1;
				} else if (vm.active == 0) {
					return false;
				}
			};

			vm.slideChanged = function(index) {
				vm.active = parseInt(index);

			};

		},
		templateUrl: 'js/slider/templates/my-slider.html'
	};
});