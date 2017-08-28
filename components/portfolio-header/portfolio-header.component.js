'use strict';

angular.
module('portfolioApp').
component('portfolioHeader', {
    templateUrl: 'components/portfolio-header/portfolio-header.template.html',
    controller: portfolioHeaderController
});
function portfolioHeaderController($http) {
    var self = this;
    $http.get('icons/icons.json').then(function(response) {
        self.icons = response.data;
    });
}