import {List} from 'immutable';
import {AccountActionTypes} from '../constants';

import AccountStateRecord from '../records/AccountState';

export default function AccountState(state = new AccountStateRecord(), action) {
    switch (action.type) {
        case AccountActionTypes.ACCOUNT_GET_START: {
            state = state.merge({
                loading: true,
                errors: new List()
            });
            break;
        }
        case AccountActionTypes.ACCOUNT_GET_SUCCESS: {
            state = state.merge({
                loading: false,
                user: action.user,
            });
            break;
        }
        case AccountActionTypes.ACCOUNT_GET_FAIL: {
            state = state.merge({
                loading: false,
                errors: action.errors,
            });
            break;
        }
        case AccountActionTypes.ACCOUNT_UPDATE_START: {
            state = state.merge({
                loading: true,
                user: state.user.merge({
                    email: action.userData.email,
                    description: action.userData.description,
                    first_name: action.userData.first_name,
                    last_name: action.userData.last_name,
                }),
            });
            break;
        }
        case AccountActionTypes.ACCOUNT_UPDATE_SUCCESS: {
            state = state.merge({
                loading: false,
            });
            break;
        }
        case AccountActionTypes.ACCOUNT_UPDATE_FAIL: {
            state = state.merge({
                loading: false,
            });
            break;
        }
    }
    return state;
}
