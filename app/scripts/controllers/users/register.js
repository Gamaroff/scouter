'use strict';

angular.module('scouterApp')
    .controller('RegisterCtrl', function ($scope, $state, $stateParams, authenticationService) {

        var model = $scope.viewModel = {
            email    : '',
            password : ''
        };

        $scope.loginUser = function () {
            // this should be replaced with a call to the API for user verification (or you could also do it in the service)
            authenticationService.login({email : model.email, role : 'user'});
            $state.transitionTo('administration', $stateParams);
        };

        $scope.loginAdmin = function () {
            // this should be replaced with a call to the API for user verification (or you could also do it in the service)
            authenticationService.login({email : model.email, role : 'admin'});
            $state.transitionTo('administration', $stateParams);
        };
    });
