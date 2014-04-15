'use strict';

angular.module('scouterApp')
    .controller('PasswordCtrl', function ($scope, $state, $stateParams, authenticationService) {

        var model = $scope.viewModel = {
            email           : '',
            password        : '',
            confirm_password: '',
            message         : null,
            status          : 'Reset Password',
            processing      : false
        };

        $scope.init = function () {

        };

        $scope.reset = function () {

            model.status = 'Resetting Password ...';
            model.processing = true;

            authenticationService.requestReset({email: model.email}, function (err, result) {

                model.status = 'Reset Password';
                model.processing = false;

                if (err) {
                    model.message = 'There was a problem resetting your password. Please try again.';
                } else {
                    model.message = 'An email has been sent with your password reset instructions.';
                }
            });
        };

    });
