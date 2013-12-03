define([
	'angular',
	'angular-bootstrap',
	'angular-route',
	'angular-animate',
	'../src/services/all',
	'../src/controllers/controller'
],
	function (angular) {
		"use strict";
		return angular.module('app', [
			'ui.bootstrap'
			, 'ngRoute'
			, 'ngAnimate'
			, 'app.controller'
			, 'app.service']);
	});