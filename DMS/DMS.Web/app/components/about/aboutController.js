(function () {
    angular
        .module("DMSApp")
        .controller("aboutController", ['$mdSidenav', 'smoothScroll', aboutController]);

    function aboutController($mdSidenav, smoothScroll) {
        var vm = this;

        vm.goToElement = function (eID){
            smoothScroll.scrollTo(eID, 0);
        };
        
        vm.openContactUs = function () {
            $mdSidenav('right').toggle();
        };
    }

})();