(function () {
    angular
        .module("DMSApp")
        .controller("gasproController", ['$mdSidenav', 'smoothScroll', gasproController]);

    function gasproController($mdSidenav, smoothScroll) {
        var vm = this;
        vm.showProductionServices = true;
        vm.showMiddleMarketing = false;
        vm.showLocalDistribution = false;
        vm.ending = "Production Services Market";

        vm.goToElement = function (eID) {
            smoothScroll.scrollTo(eID, 50);
        };

        vm.goToTop = function () {
            smoothScroll.scrollToTop();
        }

        vm.openContactUs = function () {
            $mdSidenav('left').toggle();
        };

        vm.goToProductionServices = goToProductionServices;
        vm.goToMiddleMarketing = goToMiddleMarketing;
        vm.goToLocalDistribution = goToLocalDistribution;

        function goToProductionServices() {
            vm.showProductionServices = true;
            vm.showMiddleMarketing = false;
            vm.showLocalDistribution = false;
        }
        function goToMiddleMarketing() {
            vm.showProductionServices = false;
            vm.showMiddleMarketing = true;
            vm.showLocalDistribution = false;
        }
        function goToLocalDistribution() {
            vm.showProductionServices = false;
            vm.showMiddleMarketing = false;
            vm.showLocalDistribution = true;
        }
    }

})();