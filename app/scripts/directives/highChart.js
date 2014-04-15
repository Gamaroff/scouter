'use strict';

angular.module('scouterApp')
    .directive('highChart', function () {
        return {
            template : '<div></div>',
            restrict : 'ECA',
            scope    : {
                chart   : '@',
                series  : '=',
                options : '='
            },
            link     : function postLink(scope, element, attrs) {

                var highChart = attrs.chart === 'stock' ? Highcharts.StockChart : Highcharts.Chart;

                var options = scope.options;

                if(!options) {
                    return;
                }

                var setRender = function (options) {
                    if (options.chart) {
                        options.chart.renderTo = element[0];
                    } else {
                        options.chart = {
                            renderTo : element[0]
                        }
                    }
                };

                setRender(options);

                var chart = new highChart(options);

                scope.$watch(attrs.series, function (value, oldValue) {
                    if (!value) {
                        return;
                    }

                    chart.series[0].setData(value);
                });

                scope.$watch(function() {
                    return scope.options;
                }, function (value, oldValue) {
                    if (!value) {
                        return;
                    }
                    setRender(value);

                    chart.options = value;
                    chart.redraw();

                });

            }
        };
    });
