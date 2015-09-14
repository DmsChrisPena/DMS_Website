(function () {
    angular
        .module("DMSApp")
        .controller("NavBarController", ['$mdDialog', NavBarController]);

    function NavBarController($mdDialog) {
        var vm = this;
        var originatorEv;
        vm.openMenu = function ($mdOpenMenu, ev) {
            originatorEv = ev;
            $mdOpenMenu(ev);
        }
    }

})();