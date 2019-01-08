import {Record as record, List} from 'immutable';

import {construct, fields, resolveAll, resolve} from '../helpers/mappers';
import Role from './Role';
import Pagination from './Pagination';

const defaults = {
    REC_TYPE: 'RolesState',
    roles: new List(),
    errors: new List(),
    loading: false,
    pagination: new Pagination(),
};

class RolesState extends record(defaults) {
    static fromJSON (json = {}) {
        return construct(RolesState, json, {
            roles: resolveAll.as(Role),
            errors: resolveAll.with(String),
            loading: fields.boolean,
            pagination: resolve.as(Pagination),
        });
    }
}

export default RolesState;
