(function () {
    angular
        .module("DMSApp")
        .controller("aboutController", ['$mdSidenav', 'smoothScroll', aboutController]);

    function aboutController($mdSidenav, smoothScroll) {
        var vm = this;

        vm.goToTop = function () {
            smoothScroll.scrollToTop();
        }

        vm.goToElement = function (eID){
            smoothScroll.scrollTo(eID, 0);
        };
        
        vm.openContactUs = function () {
            $mdSidenav('left').toggle();
        };

        smoothScroll.scrollToTop();
    }

})();