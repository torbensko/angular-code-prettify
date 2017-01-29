'use strict';

angular.module('sko.prettify', [])
	.directive('prettyprint', function() {
		return {
			restrict: 'C',
			link: function() {
    		prettyPrint();
			}
		}
	});