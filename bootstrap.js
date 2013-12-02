/**
 * Created with IntelliJ IDEA.
 * User: karian7
 * Date: 12/2/13
 * Time: 2:17 AM
 * To change this template use File | Settings | File Templates.
 */
define([
  'angular',
  'app',
  'routes'
], function (angular) {
  'use strict';
  angular.element(document)
      .ready(function () {
        angular.bootstrap(document, ['app']);
      })
});
