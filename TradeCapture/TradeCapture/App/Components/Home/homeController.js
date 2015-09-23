(function () {
    angular.module("TradeCaptureApp").controller("HomeController", ["homeService", HomeController]);

    function HomeController(homeService) {
        var vm = this;
        vm.getMarketData = getMarketData;
        vm.getTradeData = getTradeData;

        function getTradeData() {
            vm.trades = homeService.getTradeData();
        }
        vm.getTradeData();

        function getMarketData() {
            vm.marketData = homeService.getMarketData();
        }
    }

})();