import {Record as record} from 'immutable';

import {construct, fields} from "../helpers/mappers";

const defaults = {
    REC_TYPE: 'LoggedAction',
    id: null,
    resource_type: null,
    resource_identifier: null,
    action: null,
    user_id: null,
    user_name: null,
    created_at: null,
};

class LoggedAction extends record(defaults) {
    static fromJSON (json = {}) {
        return construct(LoggedAction, json, {
            id: fields.number,
            resource_type: fields.number,
            resource_identifier: fields.string,
            action: fields.number,
            user_id: fields.number,
            user_name: fields.string,
            created_at: fields.datetime,
        });
    }
}

export default LoggedAction;
