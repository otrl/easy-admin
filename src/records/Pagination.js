import { Record as record } from 'immutable';
import qs from 'qs';

import config from '../default-config';
import { construct, fields } from '../helpers/mappers';

const defaults = {
    page: config.paginationDefaults.page,
    limit: config.paginationDefaults.limit,
    count: 0
};

export default class Pagination extends record(defaults) {
    static fromJSON (json = {}) {
        return construct(Pagination, json, {
            page: fields.number,
            limit: fields.number,
            count: fields.number
        });
    }

    toQueryString () {
        const attributes = {};
        if (this.page !== defaults.page) {
            attributes.page = this.page;
        }

        if (this.limit !== defaults.limit) {
            attributes.limit = this.limit;
        }
        return qs.stringify(attributes);
    }
}
