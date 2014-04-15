'use strict';

angular.module('scouterApp')
    .controller('ActivateCtrl', function ($scope, $state, $stateParams, authenticationService) {

        var model = $scope.viewModel = {
            email             : '',
            password          : '',
            confirm_password  : '',
            message           : null,
            activation_message: null,
            activation_code   : null,
            valid             : false,
            status            : 'Activate Account',
            processing        : false
        };

        $scope.init = function () {
            model.activation_code = $stateParams.c;

            authenticationService.canActivate({activation_code: model.activation_code}, function (err, result) {

                if (err) {
                    model.message = err;
                } else {

                    if (result && result.activated) {
                        model.message = null;
                        model.activation_message = 'Your account is activated. You may now log in.';
                    }
                }
            });
        };

        $scope.activate = function () {

            model.status = 'Activating Account ...';
            model.processing = true;

            authenticationService.activate({email: model.email.toLowerCase(), password: model.password, activation_code: model.activation_code}, function (err, result) {

                model.status = 'Activate Account';
                model.processing = false;

                if (err) {
                    model.message = 'There was a problem with your activation. Please try again.';
                } else {
                    model.message = null;
                    model.activation_message = 'Your account is activated. You may now log in.';
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
