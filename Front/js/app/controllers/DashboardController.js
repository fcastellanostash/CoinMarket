'use strict';
angular
    .module('app.controllers')

    .controller('DashboardController', function ($scope, APIService, $localStorage, $window, $filter, DTOptionsBuilder, DTColumnBuilder) {


        $scope.convert = "USD";

        GetCotizaciones($scope.convert);

        setInterval(function () {
            GetCotizaciones($scope.convert);
        }, 5000)

        function GetCotizaciones(convert) {

            if (convert == null) {
                convert = "USD";
            }
            var GetCotizacion = APIService.GetCotizacion(convert);
            GetCotizacion.then(function (u) {
                $scope.Cotizaciones = u.data.data;

              


            }, function (error) {
                $window.location.href = "/#/blsp/tiposMaterial/list";
            });

        }
        $scope.dtInstance = {};

        $scope.dtOptions = DTOptionsBuilder
            .newOptions()
            .withLanguageSource('/js/angular-datatables-spanish.json')
            .withOption('paging', false)
            .withPaginationType('none')
            .withDisplayLength(0)
            .withOption('order', [3, 'desc']);

    }).filter('decimal', function () {

        return function (number) {



            console.log(number.toLocaleString("de-DE"))
            console.log(String(number).replace('.', ','))
            console.log((parseFloat(String(number)).toFixed(2)).toLocaleString("de-DE"))

            return parseFloat(String(number)).toFixed(2).replace('.', ',');


              

            }
        
    });