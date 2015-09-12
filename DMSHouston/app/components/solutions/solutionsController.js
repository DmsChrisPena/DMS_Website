(function () {
    angular
        .module("DMSApp")
        .controller("solutionsController", ['$routeParams', solutionsController]);

    function solutionsController($routeParams) {
        var vm = this;

        vm.showGasPro = true;
        vm.showGasTrak = false;
        vm.showEnergyPro = false;

        var extension = $routeParams.extension;
        if (extension) {
            if (extension == "gaspro") goToGasPro();
            else if (extension == "gastrak") goToGasTrak();
            else if (extension == "energypro") goToEnergyPro();
            else goToGasPro();
        }

        vm.goToGasPro = goToGasPro;
        vm.goToGasTrak = goToGasTrak;
        vm.goToEnergyPro = goToEnergyPro;

        function goToGasPro() {
            vm.showGasPro = true;
            vm.showGasTrak = false;
            vm.showEnergyPro = false;
        }
        function goToGasTrak() {
            vm.showGasPro = false;
            vm.showGasTrak = true;
            vm.showEnergyPro = false;
        }
        function goToEnergyPro() {
            vm.showGasPro = false;
            vm.showGasTrak = false;
            vm.showEnergyPro = true;
        }
    }

})();