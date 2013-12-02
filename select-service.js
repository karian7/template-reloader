define([
  'angular',
  'underscore'
],
    function (angular, _) {
      'use strict';

      var module = angular.module('app.selServices', []);

      module.service('selService', ['$http', function ($http) {
        var self = this;

        $http.get('/templates.json').success(function (data) {
          self.all = data;
        });

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

          var pathParams = _.map(self.selected,function (template) {
            return 'path=' + template;
          }).join('&');
          return 'template_manager?action=update&' + pathParams;
        }

        this.reset = function () {
          self.selected = [];
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