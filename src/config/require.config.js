/**
 * Created with IntelliJ IDEA.
 * User: karian7
 * Date: 12/2/13
 * Time: 1:23 AM
 * To change this template use File | Settings | File Templates.
 */
requirejs.config({
	baseUrl: 'src',
	paths: {
		angular: '../bower_components/angular/angular',
		underscore: '../bower_components/underscore/underscore',
		'angular-bootstrap': '../bower_components/angular-bootstrap/ui-bootstrap-tpls',
		'angular-route': '../bower_components/angular-route/angular-route',
		'angular-animate': '../bower_components/angular-animate/angular-animate'
	},
	shim: {
		underscore: {
			exports: '_'
		},
		angular: {
			exports: 'angular'
		},
		'angular-bootstrap': ['angular'],
		'angular-route': ['angular'],
		'angular-animate': ['angular']
	},
	// start!!
	deps: ['config/bootstrap']
});