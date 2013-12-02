/**
 * Created with IntelliJ IDEA.
 * User: karian7
 * Date: 12/2/13
 * Time: 1:23 AM
 * To change this template use File | Settings | File Templates.
 */
requirejs.config({
  paths: {
    angular: '/bower_components/angular/angular',
    jquery: '/bower_components/jquery/jquery',
    underscore: '/bower_components/underscore/underscore',
    'angular-bootstrap': '/bower_components/angular-bootstrap/ui-bootstrap-tpls',
    'angular-route': '/bower_components/angular-route/angular-route'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    jquery: {
      exports: 'jQuery'
    },
    angular: {
      exports: 'angular',
      deps: ['jquery']
    },
    'angular-bootstrap': ['angular'],
    'angular-route': ['angular']
  },
  // start!!
  deps: ['./bootstrap']
});