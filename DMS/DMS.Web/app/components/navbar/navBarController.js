(function () {
    angular
        .module("DMSApp")
        .controller("NavBarController", ['$mdDialog', '$mdSidenav', 'smoothScroll', NavBarController]);

    function NavBarController($mdDialog, $mdSidenav, smoothScroll) {
        var vm = this;
        var originatorEv;
        vm.openMenu = function ($mdOpenMenu, ev) {
            originatorEv = ev;
            $mdOpenMenu(ev);
        }
        vm.openNav = function () {
            $mdSidenav('right').toggle();
        };
        vm.openContactUs = function () {
            $mdSidenav('left').toggle();
        };
        vm.closeSideNav = function () {
            $mdSidenav('right').toggle();
        }
        vm.goToTop = function () {
            smoothScroll.scrollToTop();
        }
    }

})();