'use strict';

angular.
module('portfolioApp').
component('forms', {
	templateUrl: 'components/forms/forms.template.html',
	controller: formsController
});

formsController.$inject = ['$http', 'formsService', 'httpService'];

function formsController($http, formsService, httpService) {
	var self = this;

	self.result = formsService;

}
