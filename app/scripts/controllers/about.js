'use strict';

/**
 * @ngdoc function
 * @name scouterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the scouterApp
 */
angular.module('scouterApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
