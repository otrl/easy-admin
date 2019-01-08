import {Record as record} from 'immutable';
import qs from 'qs';

import {construct, fields} from '../helpers/mappers';
import config from '../default-config';

const defaults = {
    REC_TYPE: 'AccountActionLogSearch',
    fromDate: null,
    toDate: null,
    page: config.paginationDefaults.page,
    limit: config.paginationDefaults.limit,
};

class AccountActionLogSearch extends record(defaults) {
    static fromJSON (json = {}) {
        return construct(AccountActionLogSearch, json, {
            fromDate: fields.datetime,
            toDate: fields.datetime,
            page: fields.number,
            limit: fields.number,
        });
    }

    toQueryString () {
        const attributes = {};
        if (this.fromDate && this.fromDate !== defaults.fromDate) {
            attributes.fromDate = this.fromDate.format("YYYY-MM-DD");
        }

        if (this.toDate && this.toDate !== defaults.toDate) {
            attributes.toDate = this.toDate.format("YYYY-MM-DD");
        }

        if (this.page !== defaults.page) {
            attributes.page = this.page;
        }

        if (this.limit !== defaults.limit) {
            attributes.limit = this.limit;
        }

        return qs.stringify(attributes);
    }
}

export default AccountActionLogSearch;
