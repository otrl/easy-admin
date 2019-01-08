import {Record as record, List} from 'immutable';

import {construct, fields, resolveAll, resolve} from '../helpers/mappers';
import AccountActionLogSearch from './AccountActionLogSearch';
import LoggedAction from './LoggedAction';

const defaults = {
    REC_TYPE: 'AccountActionLogState',
    errors: new List(),
    loggedActions: new List(),
    loading: false,
    count: 0,
    search: new AccountActionLogSearch(),
};

class AccountActionLogState extends record(defaults) {
    static fromJSON (json = {}) {
        return construct(AccountActionLogState, json, {
            loggedActions: resolveAll.as(LoggedAction),
            errors: resolveAll.with(String),
            loading: fields.boolean,
            search: resolve.as(AccountActionLogSearch),
            count: fields.number
        });
    }
}

export default AccountActionLogState;
