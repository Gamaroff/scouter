'use strict';

angular.module('scouterApp')
    .service('dataService', function dataService(apiService) {

        var self = this;

        self.get = function () {

            var callback;
            var api;
            var isArray;
            var options;

            for (var i = 0; i < arguments.length; i++) {
                switch (typeof arguments[i]) {
                    case 'string':
                        api = arguments[i];
                        break;
                    case 'boolean':
                        isArray = arguments[i];
                        break;
                    case 'function':
                        callback = arguments[i];
                        break;
                    case 'object':
                        options = arguments[i];
                        break;
                }
            }

            apiService.get(api, options, isArray, callback);

        };

        self.post = function () {

            var callback;
            var api;
            var data;

            for (var i = 0; i < arguments.length; i++) {
                switch (typeof arguments[i]) {
                    case 'string':
                        api = arguments[i];
                        break;
                    case 'function':
                        callback = arguments[i];
                        break;
                    case 'object':
                        data = arguments[i];
                        break;
                }
            }

            apiService.post(api, data, callback);

        };

    });
