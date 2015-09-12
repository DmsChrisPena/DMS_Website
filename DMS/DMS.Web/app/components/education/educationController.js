(function () {
    angular
        .module("DMSApp")
        .controller("educationController", ['$routeParams', educationController]);

    function educationController($routeParams) {
        var vm = this;

        vm.showAcademic = true;
        vm.showCertification = false;
        vm.showPublications = false;

        var extension = $routeParams.extension;
        if (extension) {
            if (extension == "academic") goToAcademic();
            else if (extension == "certification") goToCertification();
            else if (extension == "publications") goToPublications();
            else goToAcademic();
        }

        vm.goToAcademic = goToAcademic;
        vm.goToCertification = goToCertification;
        vm.goToPublications = goToPublications;

        function goToAcademic() {
            vm.showAcademic = true;
            vm.showCertification = false;
            vm.showPublications = false;
        }
        function goToCertification() {
            vm.showAcademic = false;
            vm.showCertification = true;
            vm.showPublications = false;
        }
        function goToPublications() {
            vm.showAcademic = false;
            vm.showCertification = false;
            vm.showPublications = true;
        }
    }

})();