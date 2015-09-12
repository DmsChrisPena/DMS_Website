(function () {
    angular
        .module("DMSApp")
        .controller("servicesController", ['$routeParams', servicesController]);

    function servicesController($routeParams) {
        var vm = this;

        vm.showConsulting = true;
        vm.showFront = false;
        vm.showMiddle = false;
        vm.showBack = false;

        var extension = $routeParams.extension;
        if (extension) {
            if (extension == "consulting") goToConsulting();
            else if (extension == "front") goToFront();
            else if (extension == "middle") goToMiddle();
            else if (extension == "back") goToBack();
            else goToProfile();
        }

        vm.goToConsulting = goToConsulting;
        vm.goToFront = goToFront;
        vm.goToMiddle = goToMiddle;
        vm.goToBack = goToBack;

        function goToConsulting() {
            vm.showConsulting = true;
            vm.showFront = false;
            vm.showMiddle = false;
            vm.showBack = false;
        }
        function goToFront() {
            vm.showConsulting = false;
            vm.showFront = true;
            vm.showMiddle = false;
            vm.showBack = false;
        }
        function goToMiddle() {
            vm.showConsulting = false;
            vm.showFront = false;
            vm.showMiddle = true;
            vm.showBack = false;
        }
        function goToBack() {
            vm.showConsulting = false;
            vm.showFront = false;
            vm.showMiddle = false;
            vm.showBack = true;
        }
    }

})();