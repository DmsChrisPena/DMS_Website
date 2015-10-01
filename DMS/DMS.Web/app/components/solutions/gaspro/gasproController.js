(function () {
    angular
        .module("DMSApp")
        .controller("gasproController", ['$mdSidenav', gasproController]);

    function gasproController($mdSidenav) {
        var vm = this;
        vm.showProductionServices = true;
        vm.showMiddleMarketing = false;
        vm.showLocalDistribution = false;
        vm.ending = "Production Services Market";

        vm.openContactUs = function () {
            $mdSidenav('right').toggle();
        };

        vm.goToProductionServices = goToProductionServices;
        vm.goToMiddleMarketing = goToMiddleMarketing;
        vm.goToLocalDistribution = goToLocalDistribution;

        function goToProductionServices() {
            vm.showProductionServices = true;
            vm.showMiddleMarketing = false;
            vm.showLocalDistribution = false;
            vm.ending = "Production Services Market";
        }
        function goToMiddleMarketing() {
            vm.showProductionServices = false;
            vm.showMiddleMarketing = true;
            vm.showLocalDistribution = false;
            vm.ending = "Middle Market";
        }
        function goToLocalDistribution() {
            vm.showProductionServices = false;
            vm.showMiddleMarketing = false;
            vm.showLocalDistribution = true;
            vm.ending = "Local Distribution Market";
        }
    }

})();