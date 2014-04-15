'use strict';

angular.module('scouterApp')
    .service('chartService', function chartService() {

        var self = this;

        var chart = function (options) {

            var self = this;
            var _series = [];

            self.setChartType = function (type) {
                self.config.options.chart.type = type;
            };

            self.setRangeSelector = function (index) {
                //self.config.rangeSelector.selected = index;
               // self.config.rangeSelector.inputEnabled = false;
            };

            self.toggleLegend = function (display) {
                self.config.legend = display;
            };

            self.setSeries = function (series) {
                self.config.series = series;
            };

            self.setTitle = function (title, subtitle) {
                self.config.title.text = title;

                if (subtitle) {
                    self.config.subtitle.text = subtitle;
                }
            };

            self.setYTitle = function (title) {
                if (!self.config.yAxis) {
                    self.config.yAxis = { title: { } }
                }

                if (!self.config.yAxis.title) {
                    self.config.yAxis.title = { }
                }

                self.config.yAxis.title.text = title;

            };

            self.addSeries = function (id, series) {
                _series.push({id: id, series: series});
                self.config.series = _.pluck(_series, 'series');
            };

            self.removeSeries = function (id) {

                var newSeries = [];

                _.each(_series, function (item) {
                    if (item.id !== id) {
                        newSeries.push(item);
                    }
                });

                self.config.series = _series = newSeries;

            };

            self.clearSeries = function () {
                self.config.series = _series = [];
            };

            self.loading = function (isLoading) {
                self.config.loading = isLoading;
            };

            self.config = {
                options: {
                    chart: {
                        type: options.type || 'line'
                    }
                },

                credits: {
                    enabled: false
                },

                rangeSelector: {
                    selected: 0
                },

                series: [],

                title: {
                    text: options.title || 'Chart'
                },

                subtitle: {
                    text: options.subtitle || ''
                },

                plotOptions: options.plotOptions || null,

                loading: options.loading || false,

                //Configuration for the xAxis. Currently only one x axis can be dynamically controlled.
                //properties currentMin and currentMax provied 2-way binding to the chart's maximimum and minimum
                //xAxis         : {
                //type  : options.xAxisType || 'datetime',
                //currentMin : 0,
                //currentMax : 20,
                //title : {text : options.xAxisTitle || 'values'}
                //},
                xAxis  : options.xAxis || null,

                yAxis: options.yAxis || null,

                useHighStocks: options.highstock || false,
                navigator    : {
                    enabled: options.navigator || false
                }
            }
        };

        self.create = function (options) {
            return new chart(options);
        };

        self.createLine = function (title, subtitle, dateFormat) {
            return {
                title               : {
                    text: title
                },
                subtitle            : {
                    text: subtitle
                },
                xAxis               : {
                    type: 'datetime'
                },
                dateTimeLabelFormats: {
                    millisecond: '%H:%M:%S.%L',
                    second     : '%H:%M:%S',
                    minute     : '%H:%M',
                    hour       : '%H:%M',
                    day        : '%e. %b',
                    week       : '%e. %b',
                    month      : '%b \'%y',
                    year       : '%Y'
                },
                tooltip             : {},
                plotOptions         : {
                    line: {
                        marker: {
                            enabled: true,
                            symbol : 'circle',
                            radius : 3,
                            states : {
                                hover: {
                                    enabled: true,
                                    radius : 5
                                }
                            }
                        }
                    }
                },
                series              : []
            };
        };

        self.createPie = function (title, subtitle) {
            return {
                title      : {
                    text: title
                },
                subtitle   : {
                    text: subtitle
                },
                tooltip    : {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor          : 'pointer',
                        dataLabels      : {
                            enabled: false
                        },
                        showInLegend    : true
                    }
                },
                series     : [
                    {
                        type: 'pie',
                        name: 'Browser share',
                        data: [
                            ['Firefox', 45.0],
                            ['IE', 26.8],
                            {
                                name    : 'Chrome',
                                y       : 12.8,
                                sliced  : true,
                                selected: true
                            },
                            ['Safari', 8.5],
                            ['Opera', 6.2],
                            ['Others', 0.7]
                        ]
                    }
                ]
            };
        };

    });
