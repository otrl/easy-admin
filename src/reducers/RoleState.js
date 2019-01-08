import {List} from 'immutable';
import {RolesActionTypes} from '../constants';

import RoleStateRecord from '../records/RoleState';

export default function RoleState(state = new RoleStateRecord(), action) {
    switch (action.type) {
        case RolesActionTypes.ROLE_GET_START: {
            state = state.merge({
                loading: true,
                errors: new List()
            });
            break;
        }
        case RolesActionTypes.ROLE_GET_SUCCESS: {
            state = state.merge({
                loading: false,
                role: action.role,
            });
            break;
        }
        case RolesActionTypes.ROLE_GET_FAIL: {
            state = state.merge({
                loading: false,
                errors: action.errors,
            });
            break;
        }
        case RolesActionTypes.ROLE_UPDATE_START: {
            state = state.merge({
                loading: true,
                role: state.role.merge({
                    name: action.roleData.name,
                    description: action.roleData.description,
                    permissions: new List(action.roleData.permissions)
                }),
            });
            break;
        }
        case RolesActionTypes.ROLE_UPDATE_SUCCESS: {
            state = state.merge({
                loading: false,
            });
            break;
        }
        case RolesActionTypes.ROLE_UPDATE_FAIL: {
            state = state.merge({
                loading: false,
            });
            break;
        }
    }
    return state;
}
