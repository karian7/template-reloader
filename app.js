define([
  'angular',
  'angular-bootstrap',
  'angular-route',
  'controller',
  'service',
],
    function (angular) {
      "use strict";

      return angular.module('app', ['ui.bootstrap', 'ngRoute', 'app.services', 'app.controller']);
    });