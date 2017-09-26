'use strict';

// Define the `example` module
angular.module('portfolioApp',[])
    .factory('exFactory', exFactory);

exFactory.$inject = [];

function exFactory() {
    return {
        exampleFactory: {
            "id": "futureExample",
            "title": "Future Example",
            "image": "img/zhdun.jpg",
            "type": "angularJS",
            "small_descr": "Built with AngularJS",
            "age": 6
        },
        openModal: openModal,
        closeModal: closeModal
    };

    function openModal(title) {
        var self = this;
        this.isModalOpen = true;
        for(var i = 0; i < self.examples.length; i++) {
            if(self.examples[i].title === title) {
                self.modalExample = self.examples[i];
            }
        }
    }
    function closeModal() {
        var self = this;
        self.isModalOpen = false;
    }
}