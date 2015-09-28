(function () {
    angular
        .module("DMSApp")
        .controller("gasproController", ['$mdSidenav', gasproController]);

    function gasproController($mdSidenav) {
        var vm = this;

        vm.openContactUs = function () {
            $mdSidenav('right').toggle();
        };
    }

})();