import {List} from 'immutable';
import {RolesOptionsActionTypes} from '../constants';

import RolesOptionsStateRecord from '../records/RolesOptionsState';

export default function RolesOptionsState(state = new RolesOptionsStateRecord(), action) {
    switch (action.type) {
        case RolesOptionsActionTypes.ROLES_OPTIONS_GET_START: {
            state = state.merge({
                loading: true,
                roles: new List(),
                errors: new List()
            });
            break;
        }
        case RolesOptionsActionTypes.ROLES_OPTIONS_GET_SUCCESS: {
            state = state.merge({
                loading: false,
                roles: action.roles,
            });
            break;
        }
        case RolesOptionsActionTypes.ROLES_OPTIONS_GET_FAIL: {
            state = state.merge({
                loading: false,
                errors: action.errors,
            });
            break;
        }
    }
    return state;
}
