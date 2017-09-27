'use strict';

// Define the `example` module
angular.module('portfolioApp.forms',[])
    .factory('formsService', formsService);

formsService.$inject = ['$http', '$q'];

function formsService($http, $q) {

    return {
        _getColors: _getColors
    }

    function _getColors() {
        var deffered = $q.defer();
        $http.get('examples-json/colors.json').then(function(res) {
            deffered.resolve(res.data);
            return res.data;
        }, function (res) {
            console.error('$http.get o/' + res.data);
            deferred.reject(res.data);
        });
        return deffered.promise;
    }
}