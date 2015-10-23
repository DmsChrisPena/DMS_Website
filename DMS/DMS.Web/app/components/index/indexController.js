(function () {
    angular
        .module("DMSApp")
        .controller("indexController", ['$mdSidenav', 'smoothScroll', indexController]);

    function indexController($mdSidenav, smoothScroll) {
        var vm = this;

        vm.openContactUs = function () {
            $mdSidenav('right').toggle();
        };

        smoothScroll.scrollToTop();
    }
})();