angular
    .module('app.services', []);

angular
    .module('app.services')

    .service("APIService", function ($http, $rootScope, $cacheFactory) {

        //GET Requests
        this.GetCotizacion = function (convert) {
            return $http.get($rootScope.webapiurl + "?convert=" + convert)
        }
        
    })

