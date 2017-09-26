

(function () {
    'use strict';

    angular
        .module('portfolioApp.common')
        .factory('httpService', function ($http, $q) {
            var exports = {};

            exports.put = put;

            function put(url, data, config) {
                var deferred = $q.defer();
            
                $http.put(url, data, config).then(function (res) {
                    deferred.resolve(res);
                }, function (res) {
                    console.error('$http.put ' + url, res);
                    deferred.reject(res);
                });
            
                return deferred.promise;
            }
            
            return exports;
        });
})();
