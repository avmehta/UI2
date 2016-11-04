(function() {
	'use strict';

	angular.module('historyCapture').config(routeConfig);

	function routeConfig($routeProvider) {
		$routeProvider.when('/programService', {
			templateUrl : 'app/programService/programService.html',
			controller : 'programServiceController',
			controllerAs : 'vm'
		}).when('/blueSlip1', {
			templateUrl : 'app/blueSlip1/blueSlip1.html',
			controller : 'blueSlip1Controller',
			controllerAs : 'vm'
		}).when('/blueSlip2', {
			templateUrl : 'app/blueSlip2/blueSlip2.html',
			controller : 'blueSlip2Controller',
			controllerAs : 'vm'
		}).when('/fee', {
			templateUrl : 'app/fee/fee.html',
			controller : 'feeController',
			controllerAs : 'vm'
		}).otherwise({
			redirectTo : '/programService'
		});
	}

})();
