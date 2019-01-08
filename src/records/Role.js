import {Record as record, List} from 'immutable';

import {construct, fields, resolveAll} from "../helpers/mappers";
import {Permissions} from "../constants";

const defaults = {
    REC_TYPE: 'Role',
    id: null,
    name: null,
    description: null,
    permissions: new List()
};

class Role extends record(defaults) {
    static fromJSON (json = {}) {
        return construct(Role, json, {
            id: fields.number,
            name: fields.string,
            description: fields.string,
            permissions: resolveAll.with(String),
        });
    }

    hasPermission (permission) {
        return this.permissions.includes(permission) || this.permissions.includes(Permissions.ALL);
    }
}

export default Role;
