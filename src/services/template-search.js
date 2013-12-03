define([
	'./module',
	'underscore'
],
	function (module, _) {
		'use strict';

		module.service('TemplateSearchService', ['$http', 'ConfigFactory', function ($http, confFactory) {
			var self = this;

			confFactory.init().then(function(env) {
				$http.get(env.templateListUrl).success(function (data) {
					self.all = data;
				});
			})

			this.selected = [];

			this.addSelected = function (template) {
				self.selected = _.union(this.selected, [template]);
			};

			this.delSelected = function (template) {
				self.selected = _.without(self.selected, _.findWhere(self.selected, template));
			};

			this.getReloadPath = function () {
				if (self.selected.length == 0) {
					return '';
				}
				var pathParams = _.map(self.selected, function (template) {
					return 'path=' + template;
				}).join('&');
				return confFactory.targetEnv.reloadUrl + '?action=update&' + pathParams;
			}

			this.reset = function (env) {
				self.selected = [];
				if (!_.isUndefined(env)) {
					$http.get(env.templateListUrl).success(function (data) {
						self.all = data;
					});	
				}
			}

			this.isSelected = function (item) {
				if (_.isUndefined(item)) {
					return self.selected.length > 0;
				}
				return self.selected.indexOf(item) < 0
			}

		}]);
		return module;
	});