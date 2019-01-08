import {Record as record} from 'immutable';

import {construct, resolve} from '../helpers/mappers';

import User from './User';

const defaults = {
    REC_TYPE: 'AuthState',
    user: null
};

class AuthState extends record(defaults) {
    static fromJSON (json = {}) {
        return construct(AuthState, json, {
            user: resolve.as(User),
        });
    }
}

export default AuthState;
