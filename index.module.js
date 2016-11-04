(function() {
	'use strict';
	
	angular
		.module('historyCapture', ['ngTable', 'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ngRoute', 'ui.bootstrap', 'toastr', 'angular-toArrayFilter'])
		.factory('context', function($location) {
			
			var host = $location.host();
			
			switch(host) {
			
			case 'localhost':
				return 'https://opsg-api-eap-2.dev.uspto.gov:8443/OPSGHistoryTrackingServices/';
			case 'opsg.sit.uspto.gov':
				return 'https://opsg-api.sit.uspto.gov/OPSGServices/';
			case 'opsg.fqt.uspto.gov':
				return 'https://opsg-api.fqt.uspto.gov/OPSGServices/';
			case 'opsg-api-eap-2.dev.uspto.gov':
				return 'https://opsg-api-eap-2.dev.uspto.gov:8443/OPSGServices/';
			default:
				alert('Backend service not registered for this URL');
				throw new Error('Backend service not initialized');
			}
		})
		.factory('getURL', function(context) {
			return function(url) {
				return context + url;
			};

		});
	
})();


/*return 'http://localhost:8080/OPSGServices/';*/