import {Record as record} from 'immutable';
import qs from 'qs';

import {construct, fields} from '../helpers/mappers';
import config from '../default-config';

const defaults = {
    REC_TYPE: 'ActionLogSearch',
    fromDate: null,
    toDate: null,
    userId: null,
    action: null,
    resourceType: null,
    page: config.paginationDefaults.page,
    limit: config.paginationDefaults.limit,
};

class ActionLogSearch extends record(defaults) {
    static fromJSON(json = {}) {
        return construct(ActionLogSearch, json, {
            fromDate: fields.datetime,
            toDate: fields.datetime,
            userId: fields.number,
            action: fields.number,
            resourceType: fields.number,
            page: fields.number,
            limit: fields.number,
        });
    }

    toQueryString() {
        const attributes = {};
        if (this.fromDate && this.fromDate !== defaults.fromDate) {
            attributes.fromDate = this.fromDate.format("YYYY-MM-DD");
        }

        if (this.toDate && this.toDate !== defaults.toDate) {
            attributes.toDate = this.toDate.format("YYYY-MM-DD");
        }

        if (this.userId) {
            attributes.userId = this.userId;
        }

        if (this.action) {
            attributes.action = this.action;
        }

        if (this.resourceType) {
            attributes.resourceType = this.resourceType;
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

export default ActionLogSearch;
