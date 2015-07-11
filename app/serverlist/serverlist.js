/**
 * Created by BorakChen on 2015/7/11.
 */

'use strict';

angular.module('myApp.serverlist', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/serverlist', {
            templateUrl: 'serverlist/serverlist.html',
            controller: 'ServerListCtrl'
        });
    }])

    .controller('ServerListCtrl', function ($scope) {
        $scope.serverList = [{
            serverIp: '172.17.120.126',
            serverName: 'JBOSS AP1'
        }, {serverIp: '172.17.120.130', serverName: 'JBOSS AP2'}];

    });