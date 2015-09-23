(function () {
    angular.module("TradeCaptureApp").factory("homeService", homeService);

    function homeService() {
        var service = {};

        service.getMarketData = getMarketData;
        service.getTradeData = getTradeData;

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
            console.log(JSON.stringify(json));
            console.log(json);
            return json;
        }

        return service;
    }
})();