(function () {
    angular
        .module("DMSApp")
        .controller("indexController", ['$mdSidenav', indexController]);

    function indexController($mdSidenav) {
        var vm = this;

        vm.openContactUs = function () {
            $mdSidenav('right').toggle();
        };
    }
})();