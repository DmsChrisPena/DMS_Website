(function () {
    angular.module("TradeCaptureApp").config(['$routeProvider', Config]);

    function Config($routeProvider) {
        $routeProvider.when('/',
        {
            templateUrl: '/App/Components/Home/homeView.html',
            controller: 'HomeController as vm'
        });
    }

})();