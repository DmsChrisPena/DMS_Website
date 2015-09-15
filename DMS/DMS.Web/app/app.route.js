(function () {
    angular
        .module('DMSApp')
        .config(['$locationProvider', '$stateProvider', '$urlRouterProvider', Config]);

    function Config($locationProvider, $stateProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'app/components/index/index.html',
                controller: 'indexController as vm'
            }).state('about', { // about pages
                abstract: true,
                url: '/about',
                template: '<ui-view/>'
            }).state('about.history', { 
                url: '/history',
                templateUrl: 'app/components/about/views/history.html',
                controller: 'aboutController as vm'
            }).state('about.profile', { 
                url: '/profile',
                templateUrl: 'app/components/about/views/profile.html',
                controller: 'aboutController as vm'
            }).state('about.testimonials', { 
                url: '/testimonials',
                templateUrl: 'app/components/about/views/testimonials.html',
                controller: 'aboutController as vm'
            }).state('contact', { // contact pages
                url: '/contact',
                templateUrl: 'app/components/contact/views/index.html',
                controller: 'contactController as vm'
            }).state('education', { // education pages
                abstract: true,
                url: '/education',
                template: '<ui-view/>'
            }).state('education.academic', { 
                url: '/academic',
                templateUrl: 'app/components/education/views/academic.html',
                controller: 'educationController as vm'
            }).state('education.certification', { 
                url: '/certification',
                templateUrl: 'app/components/education/views/certification.html',
                controller: 'educationController as vm'
            }).state('education.publications', { 
                url: '/publications',
                templateUrl: 'app/components/education/views/publications.html',
                controller: 'educationController as vm'
            }).state('services', { // services pages
                abstract: true,
                url: '/services',
                template: '<ui-view/>'
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
            });
    }

})();