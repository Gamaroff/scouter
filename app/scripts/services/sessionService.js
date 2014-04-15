'use strict';

angular.module('scouterApp')
    .service('sessionService', function ($window, localStorageService, cacheService) {
        var self = this;

        self.session;

        self.clearSession = function () {
            cacheService.clearAll();
            self.session = {};
            localStorageService.remove('session');
            $window.location.href = '#/login';
        };

        self.setUser = function (user) {

            self.session = {
                session_id  : user.session_id,
                start       : user.session_start,
                user        : user
            };

            localStorageService.add('session', JSON.stringify(self.session));
        };

        self.getUser = function () {

            if (self.session && self.session.user) {
                return self.session.user;
            }

            var session = localStorageService.get('session');

            if (session) {
                self.session = JSON.parse(session);
                return self.session ? self.session.user : null;
            } else {
                return null;
            }
        };

        self.update = function (key, value) {
            var session = localStorageService.get('session');

            if (session) {
                var session = JSON.parse(session);

                session[key] = value;
                localStorageService.add('session', JSON.stringify(session));

                self.session[key] = value;
            }
        };

    });
