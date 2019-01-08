import {Record as record, List} from 'immutable';

import {construct, fields, resolveAll, resolve} from '../helpers/mappers';
import User from './User';
import Pagination from './Pagination';

const defaults = {
    REC_TYPE: 'UsersState',
    users: new List(),
    errors: new List(),
    loading: false,
    pagination: new Pagination(),
};

class UsersState extends record(defaults) {
    static fromJSON (json = {}) {
        return construct(UsersState, json, {
            users: resolveAll.as(User),
            errors: resolveAll.with(String),
            loading: fields.boolean,
            pagination: resolve.as(Pagination),
        });
    }
}

export default UsersState;
