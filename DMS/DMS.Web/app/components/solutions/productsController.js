(function () {
    angular.module("DMSApp").controller("productsController", ['$mdDialog', productsController]);

    function productsController($mdDialog) {
        var vm = this;

        vm.comingEnergypro = comingEnergypro;

        function comingEnergypro(ev) {
            $mdDialog.show({
                templateUrl: 'App/components/solutions/templates/comingSoonEnergyPro.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            })
              
        }
    }
})();