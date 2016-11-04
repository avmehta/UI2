(function() {
	'use strict';
	angular
		.module('historyCapture')
		.controller('MenuController',
			function() {
		
			var vm = this;
			
			vm.status = {
					isopen: false
			};
			
			vm.toggleDropdown = function($event) {
				$event.preventDefault();
			    $event.stopPropagation();
			    vm.status.isopen = !vm.status.isopen;
			};
						
		}); // End MenuController

})();