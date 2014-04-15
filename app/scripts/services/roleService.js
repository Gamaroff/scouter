'use strict';

angular.module('scouterApp')
    .service('roleService', function () {

        var self = this;
        var adminRoles = ['admin', 'editor'];
        var otherRoles = ['user'];

        self.validateRoleAdmin = function (currentUser) {
            return currentUser ? _.contains(adminRoles, currentUser.role) : false;
        };

        self.validateRoleOther = function (currentUser) {
            return currentUser ? _.contains(otherRoles, currentUser.role) : false;
        }

    });
