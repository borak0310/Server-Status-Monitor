'use strict';

angular.module('myApp.contacts', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/contacts', {
            templateUrl: 'contacts/contacts.html',
            controller: 'ContactsCtrl'
        });
    }])

    .controller('ContactsCtrl', function ($scope) {
        $scope.contactList = [
            {apName: 'OMS', contact1: '50', contact2: '20', contact3: '18'},
            {apName: 'CRM', contact1: '50', contact2: '20', contact3: '18'},
            {apName: 'SOM', contact1: '50', contact2: '20', contact3: '18'}
        ];

    });