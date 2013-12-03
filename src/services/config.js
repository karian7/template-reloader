define([
	'./module',
	'underscore'
],
	function (module, _) {
		'use strict';
		var DEFAULT_ENV = 'pc-web';
		var CONFIG_LOC = 'src/config/config.mock.json';
		return module.factory('ConfigFactory', ['$http', '$q', function ($http, $q) {
			return {
				configurations: [],
				init: function() {
					var self = this;
					var defered = $q.defer();
					$http.get(CONFIG_LOC)
						.success(function (data) {
							self.configurations = data;
							self.targetEnv = _.find(data, function (env) {
								return env.name == DEFAULT_ENV;
							});
							defered.resolve(self.targetEnv);
						});
					return defered.promise;
				}
			};
		}
		]);
	})
;