(function () {
    angular
        .module("DMSApp")
        .controller("servicesController", ['smoothScroll', '$stateParams', servicesController]);

    function servicesController(smoothScroll, $stateParams) {
        var vm = this;
        vm.goTo = $stateParams.goTo;

        vm.goToElement = function (eID){
            smoothScroll.scrollTo(eID, 50);
        };

        if (vm.goTo === "implementation") {
            vm.goToElement('implementation-section');
        }
        else if (vm.goTo === "training") {
            smoothScroll.scrollTo('training-section', 100);
        }
    }

})();