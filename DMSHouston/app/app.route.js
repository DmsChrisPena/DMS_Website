(function () {
    angular
        .module('DMSApp')
        .config(['$locationProvider', '$routeProvider', Config]);

    function Config($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/', {
                templateUrl: "app/components/index/indexView.html",
                controller: "indexController",
                controllerAs: "vm"
            }).when('/about', {
                templateUrl: "app/components/about/aboutView.html",
                controller: "aboutController",
                controllerAs: "vm"
            }).when('/about/:extension', {
                templateUrl: "app/components/about/aboutView.html",
                controller: "aboutController",
                controllerAs: "vm"
            }).when('/education', {
                templateUrl: "app/components/education/educationView.html",
                controller: "educationController",
                controllerAs: "vm"
            }).when('/education/:extension', {
                templateUrl: "app/components/education/educationView.html",
                controller: "educationController",
                controllerAs: "vm"
            }).when('/services', {
                templateUrl: "app/components/services/servicesView.html",
                controller: "servicesController",
                controllerAs: "vm"
            }).when('/services/:extension', {
                templateUrl: "app/components/services/servicesView.html",
                controller: "servicesController",
                controllerAs: "vm"
            }).when('/solutions', {
                templateUrl: "app/components/solutions/solutionsView.html",
                controller: "solutionsController",
                controllerAs: "vm"
            }).when('/solutions/:extension', {
                templateUrl: "app/components/solutions/solutionsView.html",
                controller: "solutionsController",
                controllerAs: "vm"
            });
    }

})();