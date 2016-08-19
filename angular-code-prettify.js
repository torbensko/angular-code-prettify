'use strict';

angular.module('sko.prettify', [])
	.directive('prettyprint', function() {
		return {
			restrict: 'C',
			link: function(scope, element) {
				console.log('pretty');
    		prettyPrint();
			}
		}
	});