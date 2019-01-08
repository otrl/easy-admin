import {Record as record, List} from 'immutable';

import {construct, fields, resolveAll, resolve} from '../helpers/mappers';
import Role from './Role';

const defaults = {
    REC_TYPE: 'RoleState',
    role: null,
    errors: new List(),
    loading: false,
};

class RoleState extends record(defaults) {
    static fromJSON (json = {}) {
        return construct(RoleState, json, {
            role: resolve.as(Role),
            errors: resolveAll.with(String),
            loading: fields.boolean,
        });
    }
}

export default RoleState;
