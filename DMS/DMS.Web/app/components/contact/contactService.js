(function () {
    angular
		.module('DMSApp')
		.service('contactService', ['$q', '$http', 'ContactUrls', contactService])

    function contactService($q, $http, ContactUrls) {
        var service = {};

        service.getTopics = getTopics;
        service.postRequest = postRequest;

        function getTopics() {
            var deferred = $q.defer();

            $http({
                url: ContactUrls.getTopics,
                method: 'GET'
            }).success(function (result) {
                deferred.resolve(result);
            }).error(function (result) {
                deferred.reject(result);
            });

            return deferred.promise;
        }
        function postRequest(request) {
            var deferred = $q.defer();

            $http({
                url: ContactUrls.postRequest,
                method: 'POST',
                data: request
            }).success(function (result) {
                deferred.resolve();
            }).error(function (result) {
                deferred.reject(result);
            });

            return deferred.promise;
        }

        return service;
    }

})();