(function () {
    angular
        .module("DMSApp")
        .controller("servicesController", ['smoothScroll', servicesController]);

    function servicesController(smoothScroll) {
        var vm = this;

        vm.goToElement = function (eID){
            smoothScroll.scrollTo(eID, 50);
        };
    }

})();