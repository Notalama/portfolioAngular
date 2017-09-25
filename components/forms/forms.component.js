'use strict';

angular.
module('portfolioApp').
component('contacts', {
	templateUrl: 'components/contacts/contacts.template.html',
	controller: contactsController
});

function contactsController($http) {
	var self = this;
	
}