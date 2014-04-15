'use strict';

angular.module('scouterApp')
    .directive('webInfoForm', function () {
        return {
            templateUrl : '/views/forms/webInfo.html',
            scope       : {
                model : '=ngModel'
            },
            link        : function (scope, element, attrs) {

            },
            controller  : function ($scope) {

            }
        };
    });
