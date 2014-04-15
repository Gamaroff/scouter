'use strict';

angular.module('scouterApp')
    .controller('LoginCtrl', function ($scope, $state, $stateParams, authenticationService) {

        var model = $scope.viewModel = {
            email     : '',
            password  : '',
            message   : null,
            status    : 'Sign in',
            processing: false
        };

        $scope.init = function () {

        };

        $scope.login = function () {

            model.status = 'Signing in ...'
            model.processing = true;

            authenticationService.login({email: model.email.toLowerCase(), password: model.password}, function (err, result) {

                if (err) {
                    model.status = 'Sign in'
                    model.processing = false;
                    model.message = 'There was a problem with your login: ' + err;
                } else {
                    model.message = null;

                    if (!result.org_id) {
                        $state.transitionTo('administration', $stateParams);
                    }
                    else {
                        if (result.is_vendor) {
                            $state.transitionTo('vending', $stateParams);
                        } else if (result.is_customer) {
                            $state.transitionTo('vending.pos.web', $stateParams);
                        }
                        else {
                            $state.transitionTo('management', $stateParams);
                        }
                    }

                }
            });
        };

    });
