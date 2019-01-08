import {List} from 'immutable';
import {UsersActionTypes} from '../constants';

import UserStateRecord from '../records/UserState';

export default function UserState(state = new UserStateRecord(), action) {
    switch (action.type) {
        case UsersActionTypes.USER_GET_START: {
            state = state.merge({
                loading: true,
                errors: new List()
            });
            break;
        }
        case UsersActionTypes.USER_GET_SUCCESS: {
            state = state.merge({
                loading: false,
                user: action.user,
            });
            break;
        }
        case UsersActionTypes.USER_GET_FAIL: {
            state = state.merge({
                loading: false,
                errors: action.errors,
            });
            break;
        }
        case UsersActionTypes.USER_UPDATE_START: {
            state = state.merge({
                loading: true,
                user: state.user.merge({
                    email: action.userData.email,
                    description: action.userData.description,
                    first_name: action.userData.first_name,
                    last_name: action.userData.last_name,
                    role_id: action.userData.role_id,
                }),
            });
            break;
        }
        case UsersActionTypes.USER_UPDATE_SUCCESS: {
            state = state.merge({
                loading: false,
            });
            break;
        }
        case UsersActionTypes.USER_UPDATE_FAIL: {
            state = state.merge({
                loading: false,
            });
            break;
        }
    }
    return state;
}
