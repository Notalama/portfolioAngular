'use strict';

angular.
module('portfolioApp').
component('navigation', {
    templateUrl: 'components/navigation/navigation.template.html',
    controller: navigationController
});
function navigationController($http) {
    var self = this;
}