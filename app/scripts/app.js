'use strict';

var appModule = angular.module('scouterApp', [
    'ui.router',
    'ui.date',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'highcharts-ng',
    'AngularGM',
    'ngProgress',
    'angularFileUpload',
    'appConfig',
    'ui.select2'
]);

appModule.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.headers.common["X-Requested-With"] = undefined;
}]);

appModule
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('main', {
                url  : '/',
                views: {
                    'content': {
                        templateUrl: 'views/main.html',
                        controller : 'MainCtrl'
                    }
                    //'navigation' : { templateUrl : 'views/nav.html' }
                }
            })
            .state('users_login', {
                url  : '/login',
                views: {
                    'content': {
                        templateUrl: 'views/users/login.html',
                        controller : 'LoginCtrl'
                    }
                }
            })
            .state('users_register', {
                url  : '/register',
                views: {
                    'content': {
                        templateUrl: 'views/users/register.html',
                        controller : 'RegisterCtrl'
                    }
                }
            })
            .state('users_activate', {
                url  : '/activate/{c}',
                views: {
                    'content': {
                        templateUrl: 'views/users/activate.html',
                        controller : 'ActivateCtrl'
                    }
                }
            })
            .state('users_password', {
                url  : '/password',
                views: {
                    'content': {
                        templateUrl: 'views/users/password.html',
                        controller : 'PasswordCtrl'
                    }
                }
            })
            .state('users_reset', {
                url  : '/reset/{c}',
                views: {
                    'content': {
                        templateUrl: 'views/users/reset.html',
                        controller : 'ResetCtrl'
                    }
                }
            })
            .state('administration', {
                url  : '/administration',
                views: {
                    'content'   : {
                        templateUrl: 'views/administration/main.html',
                        controller : 'AdministrationMainCtrl'
                    },
                    'navigation': {
                        templateUrl: 'views/administration/nav.html'
                    },
                    'header'    : {
                        templateUrl: 'views/header.html',
                        controller : 'HeaderCtrl'
                    }
                }
            })
            .state('administration.users', {
                url  : '/users',
                views: {
                    'main-content': {
                        templateUrl: 'views/administration/users/main.html',
                        controller : 'AdministrationUsersMainCtrl'
                    }
                }
            })
            .state('administration.users.list', {
                url  : '/list',
                views: {
                    'users-content': {
                        templateUrl: 'views/administration/users/list.html',
                        controller : 'AdministrationUsersListCtrl'
                    }
                }
            })
            .state('administration.manage', {
                url  : '/manage',
                views: {
                    'main-content': {
                        templateUrl: 'views/administration/manage/main.html',
                        controller : 'AdministrationManageMainCtrl'
                    }
                }
            })
            .state('administration.manage.organisations', {
                url  : '/organisations',
                views: {
                    'manage-content': {
                        templateUrl: 'views/administration/manage/organisations/main.html',
                        controller : 'AdministrationManageOrganisationsMainCtrl'
                    }
                }
            })
            .state('administration.manage.organisations.list', {
                url  : '/list',
                views: {
                    'organisations-content': {
                        templateUrl: 'views/administration/manage/organisations/list.html',
                        controller : 'AdministrationManageOrganisationsListCtrl'
                    }
                }
            })
            .state('administration.manage.utilities', {
                url  : '/utilities',
                views: {
                    'manage-content': {
                        templateUrl: 'views/administration/manage/utilities/main.html',
                        controller : 'AdministrationManageUtilitiesMainCtrl'
                    }
                }
            })
            .state('administration.manage.utilities.list', {
                url  : '/list',
                views: {
                    'utilities-content': {
                        templateUrl: 'views/administration/manage/utilities/list.html',
                        controller : 'AdministrationManageUtilitiesListCtrl'
                    }
                }
            })
            .state('administration.manage.tariffs', {
                url  : '/tariffs',
                views: {
                    'manage-content': {
                        templateUrl: 'views/administration/manage/tariffs/main.html',
                        controller : 'AdministrationManageTariffsMainCtrl'
                    }
                }
            })
            .state('administration.manage.tariffs.list', {
                url  : '/list',
                views: {
                    'tariffs-content': {
                        templateUrl: 'views/administration/manage/tariffs/list.html',
                        controller : 'AdministrationManageTariffsListCtrl'
                    }
                }
            })
            .state('administration.manage.sims', {
                url  : '/sims',
                views: {
                    'manage-content': {
                        templateUrl: 'views/administration/manage/sims/main.html',
                        controller : 'AdministrationManageSimsMainCtrl'
                    }
                }
            })
            .state('administration.manage.sims.list', {
                url  : '/list',
                views: {
                    'sims-content': {
                        templateUrl: 'views/administration/manage/sims/list.html',
                        controller : 'AdministrationManageSimsListCtrl'
                    }
                }
            })
            .state('administration.manage.devices', {
                url  : '/devices',
                views: {
                    'manage-content': {
                        templateUrl: 'views/administration/manage/devices/main.html',
                        controller : 'AdministrationManageDevicesMainCtrl'
                    }
                }
            })
            .state('administration.manage.devices.list', {
                url  : '/list',
                views: {
                    'devices-content': {
                        templateUrl: 'views/administration/manage/devices/list.html',
                        controller : 'AdministrationManageDevicesListCtrl'
                    }
                }
            })
            .state('administration.manage.hardware', {
                url  : '/hardware',
                views: {
                    'manage-content': {
                        templateUrl: 'views/administration/manage/hardware/main.html',
                        controller : 'AdministrationManageHardwareMainCtrl'
                    }
                }
            })
            .state('administration.manage.hardware.concentrators', {
                url  : '/concentrators',
                views: {
                    'hardware-content': {
                        templateUrl: 'views/administration/manage/hardware/concentrators/main.html',
                        controller : 'AdministrationManageHardwareConcentratorsMainCtrl'
                    }
                }
            })
            .state('administration.manage.hardware.concentrators.list', {
                url  : '/list',
                views: {
                    'concentrators-content': {
                        templateUrl: 'views/administration/manage/hardware/concentrators/list.html',
                        controller : 'AdministrationManageHardwareConcentratorsListCtrl'
                    }
                }
            })
            .state('administration.manage.hardware.meters', {
                url  : '/meters',
                views: {
                    'hardware-content': {
                        templateUrl: 'views/administration/manage/hardware/meters/main.html',
                        controller : 'AdministrationManageHardwareMetersMainCtrl'
                    }
                }
            })
            .state('administration.manage.hardware.meters.list', {
                url  : '/list',
                views: {
                    'meters-content': {
                        templateUrl: 'views/administration/manage/hardware/meters/list.html',
                        controller : 'AdministrationManageHardwareMetersListCtrl'
                    }
                }
            })
            .state('administration.manage.hardware.acds', {
                url  : '/acds',
                views: {
                    'hardware-content': {
                        templateUrl: 'views/administration/manage/hardware/acds/main.html',
                        controller : 'AdministrationManageHardwareAcdsMainCtrl'
                    }
                }
            })
            .state('administration.manage.hardware.acds.list', {
                url  : '/list',
                views: {
                    'acds-content': {
                        templateUrl: 'views/administration/manage/hardware/acds/list.html',
                        controller : 'AdministrationManageHardwareAcdsListCtrl'
                    }
                }
            })
            .state('administration.manage.hardware.cius', {
                url  : '/cius',
                views: {
                    'hardware-content': {
                        templateUrl: 'views/administration/manage/hardware/cius/main.html',
                        controller : 'AdministrationManageHardwareCiusMainCtrl'
                    }
                }
            })
            .state('administration.manage.hardware.cius.list', {
                url  : '/list',
                views: {
                    'cius-content': {
                        templateUrl: 'views/administration/manage/hardware/cius/list.html',
                        controller : 'AdministrationManageHardwareCiusListCtrl'
                    }
                }
            })
            .state('administration.manage.hardware.hubs', {
                url  : '/hubs',
                views: {
                    'hardware-content': {
                        templateUrl: 'views/administration/manage/hardware/hubs/main.html',
                        controller : 'AdministrationManageHardwareHubsMainCtrl'
                    }
                }
            })
            .state('administration.manage.hardware.hubs.list', {
                url  : '/list',
                views: {
                    'hubs-content': {
                        templateUrl: 'views/administration/manage/hardware/hubs/list.html',
                        controller : 'AdministrationManageHardwareHubsListCtrl'
                    }
                }
            })
            .state('administration.manage.hardware.clampers', {
                url  : '/clampers',
                views: {
                    'hardware-content': {
                        templateUrl: 'views/administration/manage/hardware/clampers/main.html',
                        controller : 'AdministrationManageHardwareClampersMainCtrl'
                    }
                }
            })
            .state('administration.manage.hardware.clampers.list', {
                url  : '/list',
                views: {
                    'clampers-content': {
                        templateUrl: 'views/administration/manage/hardware/clampers/list.html',
                        controller : 'AdministrationManageHardwareClampersListCtrl'
                    }
                }
            })
            .state('administration.monitoring', {
                url  : '/monitoring',
                views: {
                    'main-content': {
                        templateUrl: 'views/administration/monitoring/main.html',
                        controller : 'AdministrationMonitoringMainCtrl'
                    }
                }
            })
            .state('administration.monitoring.apn', {
                url  : '/apn',
                views: {
                    'monitoring-content': {
                        templateUrl: 'views/administration/monitoring/apn.html',
                        controller : 'AdministrationMonitoringApnCtrl'
                    }
                }
            })
            .state('administration.monitoring.devices', {
                url  : '/devices',
                views: {
                    'monitoring-content': {
                        templateUrl: 'views/administration/monitoring/devices.html',
                        controller : 'AdministrationMonitoringDevicesCtrl'
                    }
                }
            })
            .state('administration.monitoring.device_statuses', {
                url  : '/device_statuses',
                views: {
                    'monitoring-content': {
                        templateUrl: 'views/administration/monitoring/deviceStatus.html',
                        controller : 'AdministrationMonitoringDeviceStatusCtrl'
                    }
                }
            })
            .state('administration.monitoring.device_logs', {
                url  : '/device_logs',
                views: {
                    'monitoring-content': {
                        templateUrl: 'views/administration/monitoring/deviceLogs.html',
                        controller : 'AdministrationMonitoringDeviceLogsCtrl'
                    }
                }
            })
            .state('administration.monitoring.meter_logs', {
                url  : '/meter_logs',
                views: {
                    'monitoring-content': {
                        templateUrl: 'views/administration/monitoring/meterLogs.html',
                        controller : 'AdministrationMonitoringMeterLogsCtrl'
                    }
                }
            })
            .state('administration.monitoring.tasks', {
                url  : '/tasks',
                views: {
                    'monitoring-content': {
                        templateUrl: 'views/administration/monitoring/tasks.html',
                        controller : 'AdministrationMonitoringTasksCtrl'
                    }
                }
            })
            .state('administration.monitoring.notifications', {
                url  : '/notifications',
                views: {
                    'monitoring-content': {
                        templateUrl: 'views/administration/monitoring/notifications.html',
                        controller : 'AdministrationMonitoringNotificationsCtrl'
                    }
                }
            })
            .state('administration.monitoring.sms_reports', {
                url  : '/sms_reports',
                views: {
                    'monitoring-content': {
                        templateUrl: 'views/administration/monitoring/smsReports.html',
                        controller : 'AdministrationMonitoringSMSReportsCtrl'
                    }
                }
            })

            .state('management', {
                url  : '/management',
                views: {
                    'content'   : {
                        templateUrl: 'views/management/main.html',
                        controller : 'ManagementMainCtrl'
                    },
                    'navigation': { templateUrl: 'views/management/nav.html' },
                    'header'    : {
                        templateUrl: 'views/header.html',
                        controller : 'HeaderCtrl'
                    }
                }
            })
            .state('management.users', {
                url  : '/users',
                views: {
                    'main-content': {
                        templateUrl: 'views/management/users/main.html',
                        controller : 'ManagementUsersMainCtrl'
                    }
                }
            })
            .state('management.users.list', {
                url  : '/list',
                views: {
                    'users-content': {
                        templateUrl: 'views/management/users/list.html',
                        controller : 'ManagementUsersListCtrl'
                    }
                }
            })
            .state('management.sites', {
                url  : '/sites',
                views: {
                    'main-content': {
                        templateUrl: 'views/management/sites/main.html',
                        controller : 'ManagementSitesMainCtrl'
                    }
                }
            })
            .state('management.sites.list', {
                url  : '/list',
                views: {
                    'sites-content': {
                        templateUrl: 'views/management/sites/list.html',
                        controller : 'ManagementSitesListCtrl'
                    }
                }
            })
            .state('management.sites.site', {
                url  : '/{siteId}',
                views: {
                    'sites-content': {
                        templateUrl: 'views/management/sites/site.html',
                        controller : 'ManagementSitesSiteCtrl'
                    }
                }
            })
            .state('management.sites.site.info', {
                url  : '/info',
                views: {
                    'site-content': {
                        templateUrl: 'views/management/sites/info.html',
                        controller : 'ManagementSitesSiteInfoCtrl'
                    }
                }
            })
            .state('management.sites.site.units', {
                url  : '/units',
                views: {
                    'site-content': {
                        templateUrl: 'views/management/sites/units/units.html',
                        controller : 'ManagementSitesSiteUnitsCtrl'
                    }
                }
            })
            .state('management.sites.site.units.list', {
                url  : '/list',
                views: {
                    'units-content': {
                        templateUrl: 'views/management/sites/units/list.html',
                        controller : 'ManagementSitesSiteUnitListCtrl'
                    }
                }
            })
            .state('management.sites.site.units.unit', {
                url  : '/{unitId}',
                views: {
                    'units-content': {
                        templateUrl: 'views/management/sites/units/unit.html',
                        controller : 'ManagementSitesSiteUnitCtrl'
                    }
                }
            })
            .state('management.sites.site.units.unit.info', {
                url  : '/info',
                views: {
                    'unit-content': {
                        templateUrl: 'views/management/sites/units/info.html',
                        controller : 'ManagementSitesSiteUnitInfoCtrl'
                    }
                }
            })
            .state('management.sites.site.units.unit.customers', {
                url  : '/customers',
                views: {
                    'unit-content': {
                        templateUrl: 'views/management/sites/units/customers.html',
                        controller : 'ManagementSitesSiteUnitCustomersCtrl'
                    }
                }
            })
            .state('management.sites.site.customers', {
                url  : '/customers',
                views: {
                    'site-content': {
                        templateUrl: 'views/management/sites/customers/customers.html',
                        controller : 'ManagementSitesSiteCustomersCtrl'
                    }
                }
            })
            .state('management.sites.site.customers.list', {
                url  : '/list',
                views: {
                    'customers-content': {
                        templateUrl: 'views/management/sites/customers/list.html',
                        controller : 'ManagementSitesSiteCustomerListCtrl'
                    }
                }
            })
            .state('management.sites.site.customers.customer', {
                url  : '/{customerId}',
                views: {
                    'customers-content': {
                        templateUrl: 'views/management/sites/customers/customer.html',
                        controller : 'ManagementSitesSiteCustomerCtrl'
                    }
                }
            })
            .state('management.sites.site.customers.customer.info', {
                url  : '/info',
                views: {
                    'customer-content': {
                        templateUrl: 'views/management/sites/customers/info.html',
                        controller : 'ManagementSitesSiteCustomerInfoCtrl'
                    }
                }
            })
            .state('management.sites.site.accounts', {
                url  : '/accounts',
                views: {
                    'site-content': {
                        templateUrl: 'views/management/sites/accounts.html',
                        controller : 'ManagementSitesSiteAccountsCtrl'
                    }
                }
            })
            .state('management.sites.site.hardware', {
                url  : '/hardware',
                views: {
                    'site-content': {
                        templateUrl: 'views/management/sites/hardware/hardware.html',
                        controller : 'ManagementSitesSiteHardwareCtrl'
                    }
                }
            })
            .state('management.sites.site.hardware.concentrators', {
                url  : '/concentrators',
                views: {
                    'site-hardware': {
                        templateUrl: 'views/management/sites/hardware/concentrators.html',
                        controller : 'ManagementSitesSiteHardwareConcentratorsCtrl'
                    }
                }
            })
            .state('management.sites.site.hardware.meters', {
                url  : '/meters',
                views: {
                    'site-hardware': {
                        templateUrl: 'views/management/sites/hardware/meters.html',
                        controller : 'ManagementSitesSiteHardwareMetersCtrl'
                    }
                }
            })
            .state('management.sites.site.hardware.cius', {
                url  : '/cius',
                views: {
                    'site-hardware': {
                        templateUrl: 'views/management/sites/hardware/cius.html',
                        controller : 'ManagementSitesSiteHardwareCiusCtrl'
                    }
                }
            })
            .state('management.sites.site.hardware.acds', {
                url  : '/acds',
                views: {
                    'site-hardware': {
                        templateUrl: 'views/management/sites/hardware/acds.html',
                        controller : 'ManagementSitesSiteHardwareAcdsCtrl'
                    }
                }
            })
            .state('management.sites.site.hardware.clampers', {
                url  : '/clampers',
                views: {
                    'site-hardware': {
                        templateUrl: 'views/management/sites/hardware/clampers.html',
                        controller : 'ManagementSitesSiteHardwareClampersCtrl'
                    }
                }
            })
            .state('management.sites.site.hardware.hubs', {
                url  : '/hubs',
                views: {
                    'site-hardware': {
                        templateUrl: 'views/management/sites/hardware/hubs.html',
                        controller : 'ManagementSitesSiteHardwareHubsCtrl'
                    }
                }
            })
            .state('management.customers', {
                url  : '/customers',
                views: {
                    'main-content': {
                        templateUrl: 'views/management/customers/main.html',
                        controller : 'ManagementCustomersMainCtrl'
                    }
                }
            })
            .state('management.customers.list', {
                url  : '/list',
                views: {
                    'customers-content': {
                        templateUrl: 'views/management/customers/list.html',
                        controller : 'ManagementCustomersListCtrl'
                    }
                }
            })
            .state('management.accounts', {
                url  : '/accounts',
                views: {
                    'main-content': {
                        templateUrl: 'views/management/accounts/main.html',
                        controller : 'ManagementAccountsMainCtrl'
                    }
                }
            })
            .state('management.accounts.list', {
                url  : '/list',
                views: {
                    'accounts-content': {
                        templateUrl: 'views/management/accounts/list.html',
                        controller : 'ManagementAccountsListCtrl'
                    }
                }
            })
            .state('management.tariffs', {
                url  : '/accounts',
                views: {
                    'main-content': {
                        templateUrl: 'views/management/tariffs/main.html',
                        controller : 'ManagementTariffsMainCtrl'
                    }
                }
            })
            .state('management.tariffs.list', {
                url  : '/list',
                views: {
                    'tariffs-content': {
                        templateUrl: 'views/management/tariffs/list.html',
                        controller : 'ManagementTariffsListCtrl'
                    }
                }
            })
            .state('management.hardware', {
                url  : '/hardware',
                views: {
                    'main-content': {
                        templateUrl: 'views/management/hardware/main.html',
                        controller : 'ManagementHardwareMainCtrl'
                    }
                }
            })
            .state('management.hardware.concentrators', {
                url  : '/concentrators',
                views: {
                    'hardware-content': {
                        templateUrl: 'views/management/hardware/concentrators/main.html',
                        controller : 'ManagementHardwareConcentratorsMainCtrl'
                    }
                }
            })
            .state('management.hardware.concentrators.list', {
                url  : '/list',
                views: {
                    'concentrators-content': {
                        templateUrl: 'views/management/hardware/concentrators/list.html',
                        controller : 'ManagementHardwareConcentratorsListCtrl'
                    }
                }
            })
            .state('management.hardware.meters', {
                url  : '/meters',
                views: {
                    'hardware-content': {
                        templateUrl: 'views/management/hardware/meters/main.html',
                        controller : 'ManagementHardwareMetersMainCtrl'
                    }
                }
            })
            .state('management.hardware.meters.list', {
                url  : '/list',
                views: {
                    'meters-content': {
                        templateUrl: 'views/management/hardware/meters/list.html',
                        controller : 'ManagementHardwareMetersListCtrl'
                    }
                }
            })
            .state('management.hardware.acds', {
                url  : '/acds',
                views: {
                    'hardware-content': {
                        templateUrl: 'views/management/hardware/acds/main.html',
                        controller : 'ManagementHardwareAcdsMainCtrl'
                    }
                }
            })
            .state('management.hardware.acds.list', {
                url  : '/list',
                views: {
                    'acds-content': {
                        templateUrl: 'views/management/hardware/acds/list.html',
                        controller : 'ManagementHardwareAcdsListCtrl'
                    }
                }
            })
            .state('management.hardware.cius', {
                url  : '/cius',
                views: {
                    'hardware-content': {
                        templateUrl: 'views/management/hardware/cius/main.html',
                        controller : 'ManagementHardwareCiusMainCtrl'
                    }
                }
            })
            .state('management.hardware.cius.list', {
                url  : '/list',
                views: {
                    'cius-content': {
                        templateUrl: 'views/management/hardware/cius/list.html',
                        controller : 'ManagementHardwareCiusListCtrl'
                    }
                }
            })
            .state('management.hardware.hubs', {
                url  : '/hubs',
                views: {
                    'hardware-content': {
                        templateUrl: 'views/management/hardware/hubs/main.html',
                        controller : 'ManagementHardwareHubsMainCtrl'
                    }
                }
            })
            .state('management.hardware.hubs.list', {
                url  : '/list',
                views: {
                    'hubs-content': {
                        templateUrl: 'views/management/hardware/hubs/list.html',
                        controller : 'ManagementHardwareHubsListCtrl'
                    }
                }
            })
            .state('management.hardware.clampers', {
                url  : '/clampers',
                views: {
                    'hardware-content': {
                        templateUrl: 'views/management/hardware/clampers/main.html',
                        controller : 'ManagementHardwareClampersMainCtrl'
                    }
                }
            })
            .state('management.hardware.clampers.list', {
                url  : '/list',
                views: {
                    'clampers-content': {
                        templateUrl: 'views/management/hardware/clampers/list.html',
                        controller : 'ManagementHardwareClampersListCtrl'
                    }
                }
            })

            .state('vending', {
                url  : '/vending',
                views: {
                    'content'   : {
                        templateUrl: 'views/vending/main.html',
                        controller : 'VendingMainCtrl'
                    },
                    'navigation': {
                        templateUrl: 'views/vending/nav.html',
                        controller : 'VendingNavCtrl'
                    },
                    'header'    : {
                        templateUrl: 'views/header.html',
                        controller : 'HeaderCtrl'
                    }
                }
            })

            .state('vending.admin', {
                url  : '/admin',
                views: {
                    'main-content': {
                        templateUrl: 'views/vending/admin/main.html',
                        controller : 'VendingAdminMainCtrl'
                    }
                }
            })
            .state('vending.admin.customers', {
                url  : '/customers',
                views: {
                    'vending-admin-content': {
                        templateUrl: 'views/vending/admin/customers.html',
                        controller : 'VendingAdminCustomersCtrl'
                    }
                }
            })
            .state('vending.admin.meters', {
                url  : '/meters',
                views: {
                    'vending-admin-content': {
                        templateUrl: 'views/vending/admin/meters.html',
                        controller : 'VendingAdminMetersCtrl'
                    }
                }
            })
            .state('vending.admin.meter', {
                url  : '/meter',
                views: {
                    'vending-admin-content': {
                        templateUrl: 'views/vending/admin/meter.html',
                        controller : 'VendingAdminMeterCtrl'
                    }
                }
            })
            .state('vending.admin.reports', {
                url  : '/reports',
                views: {
                    'vending-admin-content': {
                        templateUrl: 'views/vending/admin/reports.html',
                        controller : 'VendingAdminReportsCtrl'
                    }
                }
            })
            .state('vending.admin.upload', {
                url  : '/upload',
                views: {
                    'vending-admin-content': {
                        templateUrl: 'views/vending/admin/upload.html',
                        controller : 'VendingAdminUploadCtrl'
                    }
                }
            })

            .state('vending.admin.users', {
                url  : '/users',
                views: {
                    'vending-admin-content': {
                        templateUrl: 'views/vending/admin/users.html',
                        controller : 'VendingAdminUsersCtrl'
                    }
                }
            })

            .state('vending.pos', {
                url  : '/pos',
                views: {
                    'main-content': {
                        templateUrl: 'views/vending/pos/main.html',
                        controller : 'VendingPosMainCtrl'
                    }
                }
            })
            .state('vending.pos.web', {
                url  : '/web',
                views: {
                    'vending-pos-content': {
                        templateUrl: 'views/vending/pos/web.html',
                        controller : 'VendingPosWebCtrl'
                    }
                }
            })
            .state('vending.reports', {
                url  : '/reports',
                views: {
                    'main-content': {
                        templateUrl: 'views/vending/reports/main.html',
                        controller : 'VendingReportsMainCtrl'
                    }
                }
            })
            .state('vending.reports.payments', {
                url  : '/payments',
                views: {
                    'vending-reports-content': {
                        templateUrl: 'views/vending/reports/payments.html',
                        controller : 'VendingReportsPaymentsCtrl'
                    }
                }
            })

        ;
    })
    .run(['$rootScope', '$state', '$stateParams', '$location', '$window', 'authenticationService', 'roleService', 'sessionService',
        function ($rootScope, $state, $stateParams, $location, $window, authenticationService, roleService, sessionService) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;

            // enumerate routes that don't need authentication
            var routesThatDontRequireAuth = ['/login', '/register', '/password', '/reset', '/activate', '/activated'];

            // check if current location matches route
            var routeClean = function (route) {
                return _.find(routesThatDontRequireAuth, function (noAuthRoute) {
                    return _.str.startsWith(route, noAuthRoute);
                });
            };

            $rootScope.$on('$stateChangeStart', function (ev, to, toParams, from, fromParams) {
                // if route requires auth and user is not logged in
                if (!routeClean($location.url()) && !authenticationService.isLoggedIn() && $window.location.hash !== '#/login') {
                    // redirect back to login
                    ev.preventDefault();
                    $location.path('/login');
                    // $window.location.href = '#/login';
                }
            });

        }]);
