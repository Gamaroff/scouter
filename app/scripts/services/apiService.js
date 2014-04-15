'use strict';

angular.module('scouterApp')
    .service('apiService', function ($resource) {

        var self = this;

        self.cache = {};

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

            var resource = $resource(api, options || {}, {
                get: { method: 'GET', isArray: isArray || false }
            });

            var response = resource.get(function () {
                if (response.err || response.result) {

                    if (typeof response.result === 'string') {
                        response.result = JSON.parse(response.result);
                    }

                    callback(response.err, response.result);
                }
                else if (response && response.length > 0) {
                    callback(null, response);
                }
                else {
                    callback('No records');
                }

            });
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

            var Resource = $resource(api);
            var obj = new Resource(data);
            obj.$save(function (result, headers) {
                callback(result.err, result.result);
            }, function (err) {
                callback('Error saving data');
            });

        };

    });
