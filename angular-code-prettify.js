'use strict';

angular.module('sko.prettify', [])
	.directive('prettyprint', function() {
		return {
			restrict: 'C',
			link: function(scope, element) {
				console.log('what');
    		prettyPrint();
			}
		}
	});

angular.module('sko.prettify.pre', [])
	.directive('pre', function() {
		return {
			restrict: 'E',
			link: function(scope, element) {
				console.log('hey');
				element.addClass('prettyprint');
    		prettyPrint();
			}
		}
	});