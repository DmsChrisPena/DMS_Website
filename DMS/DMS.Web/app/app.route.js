(function () {
    angular
        .module('DMSApp')
        .config(['$locationProvider', '$stateProvider', '$urlRouterProvider', Config]);

    function Config($locationProvider, $stateProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('index', { // index
                url: '/',
                templateUrl: 'app/components/index/index.html',
                controller: 'indexController as vm'
            }).state('about', { // about
                url: '/about',
                templateUrl: 'app/components/about/about.html',
                controller: "aboutController as vm"
            }).state('education', { // education page
                url: '/education',
                controller: "educationController as vm",
                templateUrl: 'app/components/education/views/academic.html'
            }).state('products', { // products pages
                url: '/products',
                controller: "productsController as vm",
                templateUrl: 'app/components/solutions/products.html'
            }).state('services', { // services pages
                url: '/services',
                templateUrl: 'app/components/services/services.html'
            }).state('services.consulting', { 
                url: '/consulting',
                templateUrl: 'app/components/services/views/consulting.html',
                controller: 'servicesController as vm'
            }).state('services.front', { 
                url: '/front',
                templateUrl: 'app/components/services/views/front.html',
                controller: 'servicesController as vm'
            }).state('services.middle', { 
                url: '/middle',
                templateUrl: 'app/components/services/views/middle.html',
                controller: 'servicesController as vm'
            }).state('services.back', { 
                url: '/back',
                templateUrl: 'app/components/services/views/back.html',
                controller: 'servicesController as vm'
            }).state('gaspro', { // gaspro pages
                url: '/gaspro',
                templateUrl: 'app/components/solutions/gaspro/gaspro.html',
                controller: 'gasproController as vm'
            }).state('gastrak', { // gastrak pages
                url: '/gastrak',
                templateUrl: 'app/components/solutions/gastrak/gastrak.html',
                controller: 'gastrakController as vm'
            }).state('energypro', { // energypro pages
                url: '/energypro',
                templateUrl: 'app/components/solutions/energypro/energypro.html',
                controller: 'energyproController as vm'
            }).state('testimonials', { // testimonials pages
                url: '/testimonials',
                templateUrl: 'app/components/testimonials/testimonials.html'
            });
    }

})();