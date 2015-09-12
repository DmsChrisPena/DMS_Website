(function () {
    angular
        .module("DMSApp")
        .controller("aboutController", ['$routeParams', aboutController]);

    function aboutController($routeParams) {
        var vm = this;
        vm.showProfile = true;
        vm.showHistory = false;
        vm.showFounder = false;
        vm.showTestimonials = false;
        vm.showContact = false;

        var extension = $routeParams.extension;
        if (extension) {
            if (extension == "profile") goToProfile();
            else if (extension == "history") goToHistory();
            else if (extension == "founder") goToFounder();
            else if (extension == "testimonials") goToTestimonials();
            else if (extension == "contact") goToContact();
            else goToProfile();
        }

        vm.goToProfile = goToProfile;
        vm.goToHistory = goToHistory;
        vm.goToFounder = goToFounder;
        vm.goToTestimonials = goToTestimonials;
        vm.goToContact = goToContact;

        function goToProfile() {
            vm.showProfile = true;
            vm.showHistory = false;
            vm.showFounder = false;
            vm.showTestimonials = false;
            vm.showContact = false;
        }
        function goToHistory() {
            vm.showProfile = false;
            vm.showHistory = true;
            vm.showFounder = false;
            vm.showTestimonials = false;
            vm.showContact = false;
        }
        function goToFounder() {
            vm.showProfile = false;
            vm.showHistory = false;
            vm.showFounder = true;
            vm.showTestimonials = false;
            vm.showContact = false;
        }
        function goToTestimonials() {
            vm.showProfile = false;
            vm.showHistory = false;
            vm.showFounder = false;
            vm.showTestimonials = true;
            vm.showContact = false;
        }
        function goToContact() {
            vm.showProfile = false;
            vm.showHistory = false;
            vm.showFounder = false;
            vm.showTestimonials = false;
            vm.showContact = true;
        }
    }

})();