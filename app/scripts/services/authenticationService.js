'use strict';

angular.module('scouterApp')
    .service('authenticationService', function (sessionService, dataService, config) {

        var self = this;

        self.login = function (data, callback) {

            dataService.post(config.admin_api_host + 'user/login', {email: data.email, password: data.password}, function (err, result) {
                if (err) {
                    callback(err);
                } else {
                    sessionService.setUser(result);
                    callback(null, result);
                }
            });

        };

        self.activate = function (data, callback) {

            dataService.post(config.admin_api_host + 'user/activate', {email: data.email, password: data.password, activation_code: data.activation_code}, function (err, result) {
                if (err) {
                    callback(err);
                } else {
                    callback(null, result.activated);
                }
            });

        };

        self.requestReset = function (data, callback) {

            dataService.post(config.admin_api_host + 'user/request_reset', {email: data.email}, function (err, result) {
                if (err) {
                    callback(err);
                } else {
                    callback(null, result.reset);
                }
            });

        };

        self.reset = function (data, callback) {

            dataService.post(config.admin_api_host + 'user/reset', {email: data.email, reset_code : data.reset_code, password : data.password}, function (err, result) {
                if (err) {
                    callback(err);
                } else {
                    callback(null, result.reset);
                }
            });

        };

        self.canReset = function (data, callback) {

            dataService.get(config.admin_api_host + 'user/reset/' + data.reset_code, function (err, result) {
                if (err) {
                    callback(err);
                } else {
                    callback(null, result.reset);
                }
            });

        };

        self.canActivate = function (data, callback) {

            dataService.post(config.admin_api_host + 'user/activated', {activation_code: data.activation_code}, function (err, result) {
                if (err) {
                    callback(err);
                } else {
                    callback(null, result);
                }
            });

        };

        self.logout = function () {
            sessionService.clearSession();
        };

        self.isLoggedIn = function () {
            return sessionService.getUser() !== null;
        };

    });
