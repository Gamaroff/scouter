'use strict';

angular.module('scouterApp')
    .service('billingService', function ($resource, config) {

        var self = this;
        var apiHost = config.meter_billing_api_host;

        self.getBillsByMeter = function (concentrator, meter, callback) {

            var method = 'meter/bills/' + concentrator + '/' + meter;

            var resource = $resource(apiHost + method);

            var response = resource.get(function () {
                if (response.result) {
                    callback(null, response.result);
                } else {
                    callback('No records');
                }

            });
        };

        self.getBillsByConcentrator = function (concentrator, callback) {

            var method = 'concentrator/bills/' + concentrator;

            var resource = $resource(apiHost + method);

            var response = resource.get(function () {
                if (response.result) {
                    callback(null, response.result);
                } else {
                    callback('No records');
                }

            });
        };

    });
