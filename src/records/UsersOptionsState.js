import {Record as record, List} from 'immutable';

import {construct, fields, resolveAll} from '../helpers/mappers';
import User from './User';

const defaults = {
    REC_TYPE: 'UsersOptionsState',
    users: new List(),
    searchString: '',
    errors: new List(),
    loading: false,
};

class UsersOptionsState extends record(defaults) {
    static fromJSON (json = {}) {
        return construct(UsersOptionsState, json, {
            users: resolveAll.as(User),
            searchString: fields.string,
            errors: resolveAll.with(String),
            loading: fields.boolean,
        });
    }
}

export default UsersOptionsState;
