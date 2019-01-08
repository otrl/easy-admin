import {List} from 'immutable';
import {UsersOptionsActionTypes} from '../constants';

import UsersOptionsStateRecord from '../records/UsersOptionsState';

export default function UsersOptionsState(state = new UsersOptionsStateRecord(), action) {
    switch (action.type) {
        case UsersOptionsActionTypes.USERS_OPTIONS_GET_START: {
            state = state.merge({
                loading: true,
                searchString: action.searchString,
                users: new List(),
                errors: new List()
            });
            break;
        }
        case UsersOptionsActionTypes.USERS_OPTIONS_GET_SUCCESS: {
            state = state.merge({
                loading: false,
                users: action.users,
            });
            break;
        }
        case UsersOptionsActionTypes.USERS_OPTIONS_GET_FAIL: {
            state = state.merge({
                loading: false,
                errors: action.errors,
            });
            break;
        }
    }
    return state;
}
