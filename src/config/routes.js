define(['../app'], function (app) {
	'use strict';
	return app.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'src/partials/list.html',
			controller: 'ListCtrl'
		});


		$routeProvider.otherwise({
			redirectTo: '/'
		});
	}
	]);
});