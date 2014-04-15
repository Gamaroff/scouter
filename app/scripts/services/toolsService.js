'use strict';

angular.module('scouterApp')
    .service('toolsService', function toolsService() {
        var self = this;

        self.findById = function (a, id) {
            for (var i = 0; i < a.length; i++) {
                if (a[i].id == id)return a[i];
            }
        }

        self.removeItem = function (array, item, property) {
            var i = _.find(array, function (a) {
                return item[property] === a[property];
            });

            if (i) {
                var j = array.indexOf(i);
                array.splice(j, 1);
            }

            return array;
        };

        self.pluralise = function (value) {

            if (self.endsWith(value, 'y')) {
                return value.substring(0, value.length - 1) + 'ies';
            } else {
                return value + 's';
            }

        };

        self.endsWith = function (str, suffix) {
            return str.indexOf(suffix, str.length - suffix.length) !== -1;
        };

        self.formatString = function (str, args) {
            var regex = new RegExp("{-?[0-9]+}", "g");

            var result =  str.replace(regex, function (item) {
                var intVal = parseInt(item.substring(1, item.length - 1));
                var replace;
                if (intVal >= 0) {
                    //replace = isNaN(args[intVal]) ? '\'' + args[intVal] + '\'' : args[intVal];
                    replace = args[intVal];
                } else if (intVal === -1) {
                    replace = "{";
                } else if (intVal === -2) {
                    replace = "}";
                } else {
                    replace = "";
                }
                return replace;
            });

            return result;

        };

        self.uniqueId = function (length) {

            var chars = '-0123456789-abcdefghijklmn-opqrstuvwxyz-';

           var randomString = function (length, chars) {
                var result = '';
                for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
                return result;
            }
            return randomString(length, chars);
        };

        self.clone = function(object) {
          return JSON.parse(JSON.stringify(object));
        };
    });
