define([
  'angular',
  'underscore',
  'select-service',
  'reload-service'],
    function (angular, _) {
      "use strict";

      var app = angular.module('app.controller', ['app.selServices', 'app.reloadService']);
      app.controller('ListCtrl', ['$scope', 'selService', 'reloadService', function ($scope, selService, reloadService) {
        $scope.all = function() {
          return selService.all;
        }
        $scope.selected = function() {
          return selService.selected;
        }
        
        $scope.isSelected = function() {
          return selService.isSelected();
        }
        
        $scope.getReloadPath = function() {
          return selService.getReloadPath();
        }
        $scope.reset = function () {
          $scope.servers = [];
          $scope.reloadSuccess = 0;
          $scope.reloadFail = 0;
          selService.reset();
        };

        $scope.reset();
        
        $scope.addSelected = function () {
          selService.addSelected($scope.search);
          $scope.search = '';
        };
        
        $scope.delSelected = function (template) {
          selService.delSelected(template);
        };

        $scope.excludeSelected = function (each) {
          return selService.isSelected(each);
        };

        $scope.reloadThis = function () {
          $scope.servers = [];
          $scope.reloadSuccess = 0;
          $scope.reloadFail = 0;
          reloadService.reloadOnce(selService.getReloadPath(), function(message) {
            $scope.$emit('reloaded', message);
          });
        };

        $scope.reloadAll = function () {
          $scope.servers = [];
          $scope.reloadSuccess = 0;
          $scope.reloadFail = 0;
          reloadService.reloadAll(selService.getReloadPath(), function(message) {
            $scope.$emit('reloaded', message);
          });
        };

        $scope.$on("reloaded", function (res, message) {
          $scope.servers.push(message);
          if (message.success) {
            $scope.reloadSuccess += 1;  
          } else {
            $scope.reloadFail += 1;  
          }
        });
      }]);
      return app;
    });