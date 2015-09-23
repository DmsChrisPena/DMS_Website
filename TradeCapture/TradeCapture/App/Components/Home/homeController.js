(function () {
    angular.module("TradeCaptureApp").controller("HomeController", ["homeService", HomeController]);

    function HomeController(homeService) {
        var vm = this;
        var jsonTrades;
        vm.getMarketData = getMarketData;
        vm.getTradeData = getTradeData;
        vm.sendMarketData = sendMarketData;
        vm.sendTradeData = getTradeData;

        function getTradeData() {
            vm.trades = homeService.getTradeData();
            
            console.log(vm.trades);
            //homeService.sendTradeData(vm.trades).then(success, fail);

            //function success(data) {
            //    console.log(data);
            //}

            //function fail(data) {
            //    console.log(data);
            //}
        }
        vm.getTradeData();

        function getMarketData() {
            vm.marketData = homeService.getMarketData();
        }

        function sendMarketData() {

        }
        
        function sendTradeData() {

        }

    }

})();