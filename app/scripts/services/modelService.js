'use strict';

angular.module('scouterApp')
    .service('modelService', function () {
        var self = this;

        self.user = {
            _id            : '', // required
            password       : '', // required
            first_name     : '', // required
            last_name      : '', // required
            is_admin       : false,
            is_vendor     : false,
            is_customer    : false,
            active         : false,
            customer_id    : undefined, // required
            points_of_sales: undefined,
            sites          : undefined,
            units          : undefined,
            status         : true // required
        };

        self.address = {
            line1      : '',
            line2      : '',
            postal_code: '',
            surburb    : '',
            city       : '', // required
            province   : '', // required
            country    : '', // required
            gps        : [],
            is_postal  : false //required
        };

        self.bank = {
            bank_name     : '', // required
            branch_name   : '',
            branch_code   : '',
            account_name  : '',
            account_number: '', // required
            swift         : ''
        };

        self.contact = {
            first_name  : '',
            last_name   : '',
            title       : '',
            name        : '',
            picture_link: '',
            email       : '',
            cell        : '',
            phone       : '',
            fax         : '',
            twitter     : '',
            skype       : '',
            google      : '',
            facebook    : '',
            linked_in   : '',
            url         : '',
            contact_type: 'main', // required
            status      : true // required
        };

        self.credit_card_merchant_info = {
            app_description  : '',
            user_group_number: '', // required
            live_app_id      : '',
            test_app_id      : '',
            merchant_number  : '',
            mrn              : '',
            usn              : '',
            user_name        : '', // required
            password         : '' // required
        };

        self.device = {
            _id          : '', // required
            category     : '', // required
            type         : '', // required
            model        : '', // required
            description  : '',
            manufacturer : '', // required
            communication: '',
            image_link   : '',
            cif_price    : 0.0, // required
            retail_price : 0.0, // required
            status       : true // required
        };

        self.sim = {
            _id           : '', // required
            control_number: '',
            pin           : '',
            puk           : '',
            serial_number : '',
            ip_address    : '', // required
            port          : '', // required
            provider      : '', // required
            assigned      : '', // required
            sites         : [], // required
            device_id     : '',
            org_id        : '',
            device_type   : '',
            status        : true // required
        };

        self.utility = {
            _id             : '', // required
            name            : '', // required
            cities          : [], // required
            address         : self.address, // required, can be empty
            contact         : self.contact, // required, can be empty
            tariffs         : [], // required
            utility_accounts: [], // required
            status          : true // required
        };

        self.tariff = {
            _id         : '', // required
            name        : '', // required
            is_prepaid  : false, // required
            prepaid_rate: 0.0, // required
            description : '',
            type        : '', // required
            kva_rating  : 0, // required
            voltage     : 0, // required
            amps        : 0, // required
            category    : '', // required
            details     : [], // required, [tariff_detail]
            utility_id  : '',
            utility_type: '', // required
            site_id     : '',
            org_id      : '',
            status      : true // required
        };

        self.organisation = {
            _id                : '', // required
            name               : '', // required, default = ''
            contact            : self.contact, // required, can be empty
            bank               : self.bank, // required, can be empty
            address            : self.address, // required, can be empty
            credit_card_info   : self.credit_card_merchant_info, // required, can be empty
            service_charge_rate: 0.6, // required
            tariffs            : [], // required
            meters             : [], // required
            concentrators      : [], // required
            acds               : [], // required
            cius               : [], // required
            hubs               : [], // required
            clampers           : [], // required
            points_of_sales    : [], // required
            users              : [], // required
            sims               : [], // required
            sites              : [], // required
            units              : [], // required
            utility_accounts   : [], // required
            customers          : [], // required
            status             : true // required
        };

        self.concentrator = {
            _id                : '', // required
            ct_ratio           : 1, // required
            kwh_threshold      : 0, // required
            kva_threshold      : 0, // required
            kvarh_threshold    : 0, // required
            bios               : '',
            app_software       : '',
            general_power_limit: 0.0, // required
            date_installed     : 0,
            date_activated     : 0,
            date_registered    : 0,
            date_received      : 0,
            active             : false, // required
            utility_account_id : '',
            tariff_id          : '',
            org_id             : '',
            device_id          : '', // required
            sim_id             : '',
            sites              : [], // required
            meters             : [], // required
            acds               : [], // required
            status             : true // required
        };

        self.ciu = {
            _id            : '', // required
            date_installed : 0,
            date_activated : 0,
            date_registered: 0, // required
            date_received  : 0,
            device_id      : '', // required
            org_id         : '',
            site_id        : '',
            unit_id        : '',
            customer_id    : '',
            meter_number       : '',
            status         : true // required
        };

        self.acd = {
            _id            : '', // required
            date_installed : 0,
            date_activated : 0,
            date_registered: 0, // required
            date_received  : 0,
            device_id      : '', // required
            org_id         : '',
            site_id        : '',
            unit_id        : '',
            concentrator_id: '',
            customer_id    : '',
            status         : true // required
        };

        self.meter = {
            _id                    : '', // required
            ct_ratio               : 1.0, // required
            phase                  : '',
            type                   : '',
            has_sensor             : false, // required
            is_active              : false, // required
            is_gprs                : false, // required
            is_common              : false, // required
            kwh_threshold          : 0.0, // required
            kva_threshold          : 0.0, // required
            kvarh_threshold        : 0.0, // required
            date_installed         : 0,
            date_activated         : 0,
            date_registered        : 0, // required
            date_received          : 0,
            kva_rating             : 0.0, // required
            voltage                : 0.0, // required
            amps                   : 0.0, // required
            last_reading           : 0.0, // required
            service_balance_updated: 0,
            service_active         : false, // required
            is_prepaid             : false, // required
            tariff_id              : '',
            concentrator_id        : '',
            unit_id                : '',
            customer_id            : '',
            device_id              : '', // required
            org_id                 : '',
            site_id                : '',
            status                 : true // required
        };

        self.hub = {
            _id            : '', // required
            serial_number  : '', // required
            user_name      : '', // required
            password       : '', // required
            date_installed : 0,
            date_activated : 0,
            date_registered: 0, // required
            date_received  : 0,
            clampers       : [], // required
            device_id      : '', // required
            site_id        : '',
            org_id         : '',
            status         : true // required
        };

        self.clamper = {
            _id            : '', // required
            date_installed : 0,
            date_activated : 0,
            date_registered: 0, // required
            date_received  : 0,
            hub_id         : '', // required
            unit_id        : '', // required
            customer_id    : '', // required
            device_id      : '', // required
            org_id         : '', // required
            site_id        : '', // required
            status         : true // required
        };

        self.customer = {
            _id                : '', // required
            external_code      : '',
            is_person          : true, // required
            name               : '', // required
            trading_name       : '',
            salutation         : '',
            identity_number    : '',
            vat_number         : '',
            address            : self.address, // required, can be empty
            bank               : self.bank, // required, can be empty
            balance            : 0.0, // required
            contact            : self.contact, // required, can be empty
            correspondence_type: '',
            org_id             : '', // required
            sites              : [], // required
            units              : [], // required
            meters             : [], // required
            acds               : [], // required
            cius               : [], // required
            hubs               : [], // required
            clampers           : [], // required
            status             : true // required
        }

        self.pos = {
            _id        : '', // required
            name       : '', // required
            description: '',
            type       : 'cash', // required
            users      : [], // required
            org_id     : '', // required
            status     : true // required
        }

        self.site = {
            _id              : '', // required
            site_name        : '', // required
            property_code    : '', // required
            portfolio        : '', // required
            region           : '', // required
            sub_region       : '', // required
            type             : '', // required
            area             : 0.0, // required
            entity_owner     : '', // required
            bill_day_of_month: 1, // required
            address          : self.address, // required, can be empty
            bank             : self.bank, // required, can be empty
            contact          : self.contact, // required, can be empty
            org_id           : '', // required
            utility_id       : '', // required
            users            : [], // required
            customers        : [], // required
            units            : [], // required
            tariffs          : [], // required
            meters           : [], // required
            concentrators    : [], // required
            acds             : [], // required
            cius             : [], // required
            hubs             : [], // required
            clampers         : [], // required
            utility_accounts : [], // required
            sims             : [], // required
            status           : true // required
        }

        self.unit = {
            _id          : '', // required
            name         : '',
            description  : '',
            unit_number  : '', // required
            type         : 'business', // required
            unit_id      : '',
            area         : 0.0, // required
            occupied_area: 0.0, // required
            is_vacant    : true, // required
            is_common    : false, // required
            site_id      : '', // required
            customer_id  : '',
            org_id       : '', // required
            meters       : [], // required
            acds         : [], // required
            cius         : [], // required
            hubs         : [], // required
            clampers     : [], // required
            status       : true // required
        }

        self.utility_account = {
            _id       : '', // required
            code      : '',
            stand     : '',
            portion   : '',
            utility_id: '', // required
            site_id   : '', // required
            tariff_id : '',
            org_id    : '', // required
            status    : true // required
        }
    });
