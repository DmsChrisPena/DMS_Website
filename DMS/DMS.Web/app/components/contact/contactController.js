(function () {
    angular
        .module("DMSApp")
        .controller("contactController", ['contactService', '$mdSidenav', contactController]);

    function contactController(contactService, $mdSidenav) {
        var vm = this;
        vm.topics = {};
        vm.requestInfo = {};
        vm.sentForm = false;
        vm.errorRequest = [];
        Object.size = function (obj) {
            var size = 0, key;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) size++;
            }
            return size;
        };
        
        vm.closeSideNav = closeSideNav;
        vm.sendRequest = sendRequest;

        function closeSideNav() {
            $mdSidenav('left').toggle();
        }

        function sendRequest() {
            if (vm.requestInfo.topic != undefined && vm.requestInfo.email != undefined) {
                vm.sentForm = true;
            }

            contactService.postRequest(vm.requestInfo).then(successRequest, failRequest);

        }

        function successRequest(data) {
            vm.requestInfo = {};
        }
        function failRequest(data) {
            var modelObj = data.modelState;
            vm.errorRequest = [];
            for (i = 0; i < Object.size(modelObj); i++) {
                console.log(modelObj[Object.keys(modelObj)[i]][0]);
                vm.errorRequest.push(modelObj[Object.keys(modelObj)[i]][0]);
            }
        }
    }

})();