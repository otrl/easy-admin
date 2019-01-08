import {Record as record, List} from 'immutable';

import {construct, fields, resolveAll, resolve} from '../helpers/mappers';
import User from './User';

const defaults = {
    REC_TYPE: 'AccountState',
    user: null,
    errors: new List(),
    loading: false,
};

class AccountState extends record(defaults) {
    static fromJSON (json = {}) {
        return construct(AccountState, json, {
            user: resolve.as(User),
            errors: resolveAll.with(String),
            loading: fields.boolean,
        });
    }
}

export default AccountState;
