(function () {
    angular
        .module("DMSApp")
        .controller("educationController", ['smoothScroll', educationController]);

    function educationController(smoothScroll) {
        var vm = this;

        vm.goToElement = function (eID){
            smoothScroll.scrollTo(eID, 50);
        };
    }

})();