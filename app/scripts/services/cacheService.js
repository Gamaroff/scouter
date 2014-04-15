'use strict';

angular.module('scouterApp')
    .service('cacheService', function (localStorageService) {
        var self = this;

        self.data = {};

        self.clearAll = function () {
            localStorageService.clearAll();
        };

        self.set = function (key, value) {
            localStorageService.add(key, JSON.stringify(value));
            self.data[key] = value;
        };

        self.remove = function (type) {
            localStorageService.remove(type);
            delete self.data[type];
        };

        self.get = function (key) {
            var value = localStorageService.get(key);

            if (value) {
                self.data[key] = JSON.parse(value);
                return self.data[key];
            }

            return null;
        };
    });
