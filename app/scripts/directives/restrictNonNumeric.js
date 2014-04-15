'use strict';

angular.module('scouterApp')
    .directive('restrictNonNumeric', function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attr, ngModelCtrl) {
                function fromUser(text) {
                    if(text)
                    {
                        var transformedInput = text.replace(/[^0-9]/g, '');
                    }
                    if ((transformedInput!=null) && (transformedInput !== text)) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                ngModelCtrl.$parsers.push(fromUser);
            }
        };
    });


