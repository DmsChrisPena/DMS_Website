(function () {
    angular.module("TradeCaptureApp").factory("homeService", ["$http", "$q", homeService]);

    function homeService($http, $q) {
        var service = {};

        service.getMarketData = getMarketData;
        service.getTradeData = getTradeData;
        service.sendMarketData = sendMarketData;
        service.sendTradeData = sendTradeData;


        function getMarketData() {
            var x, i, xmlhttp, xmlDoc, table;
            xmlhttp = new XMLHttpRequest();
            xmlhttp.open("GET", "/App/MarketData.xml", false);
            xmlhttp.send();
            xmlDoc = xmlhttp.responseXML;
            var json = $.xml2json(xmlDoc);
            console.log(json);
            return json;
        }

        function getTradeData() {
            var x, i, xmlhttp, xmlDoc, table;
            xmlhttp = new XMLHttpRequest();
            xmlhttp.open("GET", "/App/Trade.xml", false);
            xmlhttp.send();
            xmlDoc = xmlhttp.responseXML;
            var json = $.xml2json(xmlDoc);
            console.log(json);
            return json;
        }

        function sendMarketData(markData) {
            var deferred = $q.defer();

            $http({
                url: "/api/XML/markets/",
                method: "POST",
                data: markData
            }).success(function (data) {
                deferred.resolve(data);
            }).error(function (data) {
                deferred.reject(data);
            })

            return deferred.promise;
        }

        function sendTradeData(tradeData) {
            var deferred = $q.defer();

            $http({
                url: "/api/xml/trades",
                method: "POST",
                data: { data: JSON.stringify(tradeData) }
            }).success(function (data) {
                deferred.resolve(data);
            }).error(function (data) {
                deferred.reject(data);
            })

            return deferred.promise;
        }

        return service;
    }
})();