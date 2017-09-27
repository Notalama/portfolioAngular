'use strict';

angular.
module('portfolioApp').
component('forms', {
	templateUrl: 'components/forms/forms.template.html',
	controller: formsController
});

formsController.$inject = ['$http'];

function formsController($http) {
	var self = this;

	self.result = {};

	self.result.colorSelect = "";
}