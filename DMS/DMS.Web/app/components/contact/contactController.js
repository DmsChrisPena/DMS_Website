(function () {
    angular
        .module("DMSApp")
        .controller("contactController", ['contactService', '$mdSidenav', contactController]);

    function contactController(contactService, $mdSidenav) {
        var vm = this;
        vm.topics = {};
        vm.requestInfo = {};
        vm.sentForm = false;
        
        vm.closeSideNav = closeSideNav;
        vm.sendRequest = sendRequest;

        function closeSideNav() {
            $mdSidenav('right').toggle();
        }

        function sendRequest() {
            vm.sentForm = true;
            contactService.postRequest(vm.requestInfo).then(successRequest, failRequest);
        }

        function successRequest(data) {
            vm.requestInfo = {};
        }
        function failRequest(data) {
            vm.requestInfo = {};
        }
    }

})();