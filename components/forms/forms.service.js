'use strict';

// Define the `example` module
angular.module('portfolioApp', [])
.factory('formsService', formsService);

formsController.$inject = ['$http', 'httpService', 'fields'];

function formsService($q, httpService, fields) {
    var eports = {};

    exports.update = update;
    exports.get = get;
    function update() {
        return;
    }


    function get() {
        return fields.setFormFields()
        .then(function(response) {
            var result = {};
            console.log(response);
            result.fieldsContent = response;
            return result;
        });
    }
}
