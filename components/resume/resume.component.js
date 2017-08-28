'use strict';

angular.
module('portfolioApp').
component('resume', {
    templateUrl: 'components/resume/resume.template.html',
    controller: resumeController
});
function resumeController($http) {
    var self = this;
    $http.get('myInfo/myInfo.json').then(function(response) {
        self.myInfo = response.data;
    });

}