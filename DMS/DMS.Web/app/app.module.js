(function () {
    //Dependencies here
    angular
        .module("DMSApp", ['ui.router', 'ngMaterial', 'ngMdIcons'])
        .constant('ContactUrls', {
            getTopics: '/api/contact/topics',
            postRequest: '/api/contact/request'
        });
})();