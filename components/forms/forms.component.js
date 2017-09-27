'use strict';

angular.
module('portfolioApp.forms').
component('forms', {
	templateUrl: 'components/forms/forms.template.html',
	controller: formsController
});

formsController.$inject = ['$http', 'formsService', '$q'];

function formsController($http, formsService, $q) {

	var self = this;
	self.result = {};
	self.result.colors = [];
	self.result.colorSelect = "white";
	self.result.phrase = "";
	self.showResult = showResult;
	self.getColors = formsService._getColors;
	self.init = init;

	init();

	function init() {
		self.getColors().then(function(res) {
			self.result.colors = res.data;
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	function showResult() {
		return self.result.colorSelect + " " + self.result.phrase + ".";
	}
}