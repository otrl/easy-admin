import {Record as record, List} from 'immutable';

import {construct, fields, resolveAll, resolve} from '../helpers/mappers';
import ActionLogSearch from './ActionLogSearch';
import LoggedAction from './LoggedAction';

const defaults = {
    REC_TYPE: 'ActionLogState',
    errors: new List(),
    loggedActions: new List(),
    loading: false,
    count: 0,
    search: new ActionLogSearch(),
};

class ActionLogState extends record(defaults) {
    static fromJSON (json = {}) {
        return construct(ActionLogState, json, {
            loggedActions: resolveAll.as(LoggedAction),
            errors: resolveAll.with(String),
            loading: fields.boolean,
            search: resolve.as(ActionLogSearch),
            count: fields.number
        });
    }
}

export default ActionLogState;
