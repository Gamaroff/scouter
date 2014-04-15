'use strict';

angular.module('scouterApp')
    .service('listService', function () {
        var self = this;

        self.provinces = ['Gauteng', 'Northern Cape', 'Kwazulu Natal', 'Free State'];
        self.countries = ['South Africa', 'Australia'];



        self.years = [2013,2014,2015,2016,2017,2018,2019];
        self.months = [
            'January',
            'February',
            'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
        ];
        self.days = [];

        for (var i = 1; i < 32; i++) {
            self.days.push(i);
        }


    });
