'use strict';

angular.module('sko.prettify', [])
	.directive('prettyprint', function() {
		return {
			restrict: 'C',
			link: function(scope, element) {
    		prettyPrint();
			}
		}
	});

angular.module('sko.prettify.pre', [])
	.directive('pre', function() {
		return {
			restrict: 'E',
			link: function(scope, element) {
				element.addClass('prettyprint');
    		prettyPrint();
			}
		}
	});