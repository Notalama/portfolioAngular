(function () {
    'use strict';

    angular
        .module('portfolioApp.common')
        .factory('fields', fields);

        fields.$inject = ['$http','httpService'];
        
        function fields($q) {
            var exports = {};
            exports.storage = {};

            function setFormFields(data) {
                return httpService.put('examples-json/', data)
                    .then(function (res) {
                        exports.storage.formFields = res.data;
                        return res.data;
                    });
            }

            return exports;
        }
})();
