define([
	'./module',
	'underscore'
],
	function (module, _) {
		'use strict';

		module.service('ReloadService', ['$http', '$q', 'TemplateSearchService', function ($http, $q, templateSearchService) {
			var self = this;
			
			this.reset = function() {
				self.servers = [];
				self.reloadSuccess = 0;
				self.reloadFail = 0;	
			}
			
			this.one = function (env, server) {
				var reloadUrl = templateSearchService.getReloadPath(env)
//				$http.jsonp("http://" + server + env.contextPath + reloadUrl + '&callback=JSON_CALLBACK') // uncomment for real..
				$http.jsonp("http://www.filltext.com?rows=1&server=" + encodeURIComponent(server) + "&callback=JSON_CALLBACK")
					.success(function () {
						self.servers.push({name: server, success: true})
						self.reloadSuccess += 1;
					})
					.error(function () {
						self.servers.push({name: server, success: false})
						self.reloadFail += 1;
					});
			};

			this.all = function (env) {
				_.each(env.servers, function (server) {
					self.one(env, server);
				});
			};

		}]);
		return module;
	});