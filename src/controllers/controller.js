define([
	'angular'],
	function (angular) {
		"use strict";

		var app = angular.module('app.controller', []);
		app.controller('ListCtrl', [
			'$scope',
			'TemplateSearchService',
			'ReloadService',
			'ConfigFactory', 
			function ($scope, templateSearchService, reloadService, configFactory) {
				$scope.TemplateSearchService = templateSearchService;
				$scope.Config = configFactory;
				$scope.ReloadService = reloadService;

				$scope.reset = function (env) {
					templateSearchService.reset(env);
					reloadService.reset();
				};
				$scope.reset();

				
				$scope.changeEnv = function (env) {
					$scope.reset(env);
				}

				$scope.reloadOne = function (env, selectServer) {
					reloadService.reset();
					reloadService.one(env, selectServer);
				};

				$scope.reloadAll = function (env) {
					reloadService.reset();
					reloadService.all(env);
				};
			}]);
		return app;
	});