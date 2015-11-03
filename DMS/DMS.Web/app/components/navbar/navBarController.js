(function () {
    angular
        .module("DMSApp")
        .controller("NavBarController", ['$mdDialog', '$mdSidenav', 'smoothScroll', '$timeout', NavBarController]);

    function NavBarController($mdDialog, $mdSidenav, smoothScroll, $timeout) {
        var vm = this;
        vm.showFooter = false;
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

        // delay showing the footer for 3 seconds
        $timeout(function(){
            vm.showFooter = true;
        }, 3000);
    }

})();