(function () {
    //Dependencies here
    angular
        .module("DMSApp", ['ui.router', 'ngMaterial', 'ngMdIcons', 'ngAnimate', "ngHamburger"])
        .constant('ContactUrls', {
            getTopics: '/api/contact/topics',
            postRequest: '/api/contact/request'
        });
})();