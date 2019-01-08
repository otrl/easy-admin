import {List} from 'immutable';
import {UsersActionTypes} from '../constants';

import UsersStateRecord from '../records/UsersState';

export default function UsersState(state = new UsersStateRecord(), action) {
    switch (action.type) {
        case UsersActionTypes.USERS_GET_START: {
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
        case UsersActionTypes.USERS_GET_SUCCESS: {
            state = state.merge({
                loading: false,
                users: action.users,
                pagination: state.pagination.set("count", action.count)
            });
            break;
        }
        case UsersActionTypes.USERS_GET_FAIL: {
            state = state.merge({
                loading: false,
                errors: action.errors,
            });
            break;
        }
    }
    return state;
}
