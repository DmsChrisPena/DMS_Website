(function () {
    angular
        .module("DMSApp")
        .controller("testimonialsController", ['smoothScroll', testimonialsController]);

    function testimonialsController(smoothScroll) {
        var vm = this;

        vm.goToElement = function (eID) {
            smoothScroll.scrollTo(eID, 50);
        };

        smoothScroll.scrollToTop();
    }

})();