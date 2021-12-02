var app;
(function () {
    app = angular.module("app", ["app.services", "app.controllers", 'angular-loading-bar', 'ngRoute', 'datatables', 'ngCookies', 'am.multiselect', 'angular.filter', 'ngMaterial', 'ngMessages', 'treeControl', 'ngStorage', 'ui.bootstrap']);
})();

app.run(function ($rootScope, $http, $window) {
    
    $http.defaults.headers.put = { 'Content-Type': 'application/x-www-form-urlencoded' } //Sets content header globally for put requests
    $http.defaults.headers.post = { 'Content-Type': 'application/x-www-form-urlencoded' } //Sets content header globally for post requests

    $rootScope.$on("$locationChangeSuccess", function (event, next, current) {
        console.log('page changed');
    });

});

app.config(function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider

    .when("/", {
        templateUrl: "pages/dashboard.html",
        controller: 'DashboardController'
    })

   

});


app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default').dark();
});


app.config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
    cfpLoadingBarProvider.latencyThreshold = 500; //Minimum request time to execute loadingbar(miliseconds)
}]);

app.config(function ($mdDateLocaleProvider) {
    $mdDateLocaleProvider.formatDate = function (date) {
        if (!date)
            return null;
        return moment(date).format('YYYY-MM-DD');
    };
    $mdDateLocaleProvider.parseDate = function (dateString) {
        if (!dateString)
            return null;
        var m = moment(dateString, 'YYYY-MM-DD', true);
        return m.isValid() ? m.toDate() : new Date(NaN);
    };
});



app.config(function ($httpProvider) {
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  
}
);


app.filter('capitalize', function () {
    return function (input) {
        input = input.replace(/_/g, " ");
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});



