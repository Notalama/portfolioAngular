'use strict';

angular.
module('portfolioApp').
component('contacts', {
	templateUrl: 'components/contacts/contacts.template.html',
	controller: contactsController
});

function contactsController($http) {
	var self = this;
	$http.get("myInfo/myInfo.json").then(function(response) {
        self.myInfo = response.data;
    });
}