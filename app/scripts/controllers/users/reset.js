'use strict';

angular.module('scouterApp')
    .controller('ResetCtrl', function ($scope, $state, $stateParams, authenticationService) {

        var model = $scope.viewModel = {
            email           : '',
            password        : '',
            confirm_password: '',
            message         : null,
            reset_message   : null,
            reset_code      : null,
            valid           : false,
            status          : 'Reset Password',
            processing      : false
        };

        $scope.init = function () {
            model.reset_code = $stateParams.c;

            authenticationService.canReset({reset_code: model.reset_code}, function (err, result) {

                if (err) {
                    model.message = err;
                } else {
                    model.message = 'Enter your new Password';
                }
            });

        };

        $scope.reset = function () {

            model.status = 'Resetting Password ...';
            model.processing = true;

            authenticationService.reset({email: model.email.toLowerCase(), password: model.password, reset_code: model.reset_code}, function (err, result) {

                model.status = 'Reset Password';
                model.processing = false;

                if (err) {
                    model.message = err;
                } else {
                    model.message = null;
                    model.reset_message = 'Your Password has been Reset. You may now log in.';
                }
            });
        };

        $scope.$watch('viewModel.confirm_password', function (newValue, oldValue) {
            if (newValue !== oldValue) {
                validatePasswords();
            }
        });

        $scope.$watch('viewModel.password', function (newValue, oldValue) {
            if (newValue !== oldValue) {
                validatePasswords();
            }
        });

        var validatePasswords = function () {
            if (model.confirm_password !== model.password) {
                model.message = 'Your passwords do not match.';
                model.valid = false;
            } else {
                model.message = null;
                model.valid = true;
            }
        };

    });
