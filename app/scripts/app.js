'use strict';

/**
 * @ngdoc overview
 * @name scouterApp
 * @description
 * # scouterApp
 *
 * Main module of the application.
 */
angular
    .module('scouterApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngTouch',
        'ui.router'
    ])
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('main', {
                url  : '/',
                views: {
                    'content': {
                        templateUrl: 'views/main.html',
                        controller : 'MainCtrl'
                    }
                }
            })
    });
