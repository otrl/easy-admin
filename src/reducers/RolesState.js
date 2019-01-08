import {List} from 'immutable';
import {RolesActionTypes} from '../constants';

import RolesStateRecord from '../records/RolesState';

export default function RolesState(state = new RolesStateRecord(), action) {
    switch (action.type) {
        case RolesActionTypes.ROLES_GET_START: {
            state = state.merge({
                loading: true,
                pagination: state.pagination.merge({
                    page: action.page,
                    limit: action.limit,
                }),
                errors: new List()
            });
            break;
        }
        case RolesActionTypes.ROLES_GET_SUCCESS: {
            state = state.merge({
                loading: false,
                roles: action.roles,
                pagination: state.pagination.set("count", action.count)
            });
            break;
        }
        case RolesActionTypes.ROLES_GET_FAIL: {
            state = state.merge({
                loading: false,
                errors: action.errors,
            });
            break;
        }
    }
    return state;
}
