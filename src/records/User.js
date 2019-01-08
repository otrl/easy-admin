import {Record as record} from 'immutable';
import {construct, fields, resolve} from '../helpers/mappers';
import Role from './Role';

const defaults = {
    REC_TYPE: 'User',
    id: null,
    email: null,
    first_name: null,
    last_name: null,
    has_original_password: false,
    token_count: 0,
    role_id: null,
    role: null,
    created_at: null,
    updated_at: null,
};

class User extends record(defaults) {
    static fromJSON (json = {}) {
        return construct(User, json, {
            id: fields.number,
            email: fields.string,
            first_name: fields.string,
            last_name: fields.string,
            has_original_password: fields.boolean,
            role_id: fields.number,
            role: resolve.as(Role),
            token_count: fields.number,
            created_at: fields.datetime,
            updated_at: fields.datetime,
        });
    }

    hasPermission (permission) {
        return this.role && this.role.hasPermission(permission);
    }
}

export default User;
