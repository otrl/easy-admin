import {List} from 'immutable';
import {AccountActionLogActionTypes} from '../constants';

import AccountActionLogStateRecord from '../records/AccountActionLogState';

export default function AccountActionLogState(state = new AccountActionLogStateRecord(), action) {
    switch (action.type) {
        case AccountActionLogActionTypes.ACCOUNT_ACTION_LOG_GET_START: {
            state = state.merge({
                loading: true,
                search: action.search,
                errors: new List()
            });
            break;
        }
        case AccountActionLogActionTypes.ACCOUNT_ACTION_LOG_GET_SUCCESS: {
            state = state.merge({
                loading: false,
                loggedActions: action.actions,
                count: action.count
            });
            break;
        }
        case AccountActionLogActionTypes.ACCOUNT_ACTION_LOG_GET_FAIL: {
            state = state.merge({
                loading: false,
                errors: action.errors,
                loggedActions: new List()
            });
            break;
        }
    }
    return state;
}
