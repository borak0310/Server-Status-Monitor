'use strict';

angular.module('myApp.alert', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/alert', {
            templateUrl: 'alert/alert.html',
            controller: 'AlertCtrl'
        });
    }])

    .controller('AlertCtrl', function ($scope) {
        $scope.alertList = [{
            serverIp: '172.17.120.aaa',
            serverName: 'JBOSS AP1',
            serverMsg:'記憶體不足'
        }, {serverIp: '172.17.120.130', serverName: 'JBOSS AP2',serverMsg:'CPU LOAD過高'}];

    });