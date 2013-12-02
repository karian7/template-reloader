define([
  'angular',
  'underscore'
],
    function (angular, _) {
      'use strict';

      var module = angular.module('app.reloadService', []);

      module.service('reloadService', ['$http', function ($http) {

        this.reloadOnce = function (reloadUrl) {
          $http.get(reloadUrl).success(function (data) {
            console.log(data);
          });
        };

        this.reloadAll = function (reloadUrl, callback) {
          $http.get("/servers.json").success(function (servers) {
            _.each(servers, function (server) {
//                    $http.jsonp("http://" + server + ".cafe.daum.net/_c21_/" + $scope.reloadPath + '&out=jsonp').success(function (data) {
              $http.jsonp("http://www.filltext.com/?rows=1&server=" + server + "&callback=JSON_CALLBACK")
                  .success(function () {
                    callback({name: server, success: true});
                  })
                  .error(function () {
                    callback({name: server, success: false});
                  });
            });
          });
        };

      }]);
      return module;
    });