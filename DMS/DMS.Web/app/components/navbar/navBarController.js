(function () {
    angular
        .module("DMSApp")
        .controller("NavBarController", ['$mdDialog', '$mdSidenav', NavBarController]);

    function NavBarController($mdDialog, $mdSidenav) {
        var vm = this;
        var originatorEv;
        vm.openMenu = function ($mdOpenMenu, ev) {
            originatorEv = ev;
            $mdOpenMenu(ev);
        }
        vm.openContactUs = function () {
            $mdSidenav('right').toggle();
        };
    }

})();