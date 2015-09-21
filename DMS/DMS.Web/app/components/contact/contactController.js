(function () {
    angular
        .module("DMSApp")
        .controller("contactController", ['contactService', contactController]);

    function contactController(contactService) {
        var vm = this;
        vm.topics = {};
        vm.requestInfo = {};
        
        vm.sendRequest = sendRequest;
        contactService.getTopics().then(successGetTopics, failGetTopics);

        function sendRequest() {
            contactService.postRequest(vm.requestInfo).then(successRequest, failRequest);
        }

        function successGetTopics(data) {
            vm.topics = data;
            console.log(data);
        }
        function failGetTopics(data) {

        }

        function successRequest(data) {
            vm.requestInfo = {};
        }
        function failRequest(data) {
            vm.requestInfo = {};
        }
    }

})();