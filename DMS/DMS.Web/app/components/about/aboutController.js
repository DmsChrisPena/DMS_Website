(function () {
    angular
        .module("DMSApp")
        .controller("aboutController", ['$mdSidenav', aboutController]);

    function aboutController($mdSidenav) {
        var vm = this;
        
        vm.openContactUs = function () {
            $mdSidenav('right').toggle();
        };
    }

})();