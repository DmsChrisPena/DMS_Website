(function () {
    angular
        .module("DMSApp")
        .controller("gastrakController", ['$mdSidenav', 'smoothScroll', gastrakController]);

    function gastrakController($mdSidenav, smoothScroll) {
        var vm = this;

        vm.goToElement = function (eID) {
            smoothScroll.scrollTo(eID, 50);
        };

        vm.openContactUs = function () {
            $mdSidenav('right').toggle();
        };
    }

})();