'use strict';

angular.
module('portfolioApp').
component('example', {
    templateUrl: 'components/example/example.template.html',
    controller: exampleController
});

exampleController.$inject = ['$http','exFactory'];

function exampleController($http, exFactory) {
    var self = this;
    self.showAngular = showAngular;
    self.showWordpress = showWordpress;
    self.showTheRestExamples = showTheRestExamples;
    self.showAll = showAll;
    self.openModal = exFactory.openModal;
    self.closeModal = exFactory.closeModal;
    self.activeTab = 1;
    self.isModalOpen = false;
    self.modalExample = {};
    $http.get("examples-json/examples.json").then(function(response) {
        self.examples = response.data;
        while(self.examples.length < 8) {
            self.examples.push(exFactory.exampleFactory);
            exFactory.exampleFactory.age++;
        }
    });

    function showAll() {
        $http.get("examples-json/examples.json").then(function(response) {
            self.examples = response.data;
            while(self.examples.length < 8) {
                self.examples.push(exFactory.exampleFactory);
                exFactory.exampleFactory.age++;
            }
        });
        self.activeTab = 1;
    }

    function showAngular() {
        var sortedA = [];
        $http.get("examples-json/examples.json").then(function(response) {
            var notSorted = response.data;
            for(var i = 0; i < notSorted.length; i++) {
                if(notSorted[i].type == "angular") {
                    sortedA.push(notSorted[i]);
                }
            }
            self.examples = sortedA;
        });
        self.activeTab = 2;
    }

    function showWordpress() {
        var sorted = [];
        $http.get("examples-json/examples.json").then(function(response) {
            var notSorted = response.data;
            for(var i = 0; i < notSorted.length; i++) {
                if(notSorted[i].type == "wordpress") {
                    sorted.push(notSorted[i]);
                }
            }
            self.examples = sorted;
        });
        self.activeTab = 3;
    }

    function showTheRestExamples() {
        var sortedR = [];
        $http.get("examples-json/examples.json").then(function(response) {
            var notSorted = response.data;
            for(var i = 0; i < notSorted.length; i++) {
                if(notSorted[i].type == "simple") {
                    sortedR.push(notSorted[i]);
                }
            }
            self.examples = sortedR;
        });
        self.activeTab = 4;
    }
};

