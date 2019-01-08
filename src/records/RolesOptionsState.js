import {Record as record, List} from 'immutable';

import {construct, fields, resolveAll} from '../helpers/mappers';
import Role from './Role';

const defaults = {
    REC_TYPE: 'RolesOptionsState',
    roles: new List(),
    errors: new List(),
    loading: false,
};

class RolesOptionsState extends record(defaults) {
    static fromJSON (json = {}) {
        return construct(RolesOptionsState, json, {
            roles: resolveAll.as(Role),
            errors: resolveAll.with(String),
            loading: fields.boolean,
        });
    }
}

export default RolesOptionsState;
