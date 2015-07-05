'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', function ($scope) {
        $scope.serverStatusList = [{
            serverName: 'JBOSS AP1',
            cpu: '50',
            mem: '30',
            conn: '10',
            status: 'OK'
        }, {serverName: 'JBOSS AP2', cpu: '50', mem: '30', conn: '10', status: 'OK'}];

    });