import {List} from 'immutable';
import {ActionLogActionTypes} from '../constants';

import ActionLogStateRecord from '../records/ActionLogState';

export default function ActionLogState(state = new ActionLogStateRecord(), action) {
    switch (action.type) {
        case ActionLogActionTypes.ACTION_LOG_GET_START: {
            state = state.merge({
                loading: true,
                search: action.search,
                errors: new List()
            });
            break;
        }
        case ActionLogActionTypes.ACTION_LOG_GET_SUCCESS: {
            state = state.merge({
                loading: false,
                loggedActions: action.actions,
                count: action.count
            });
            break;
        }
        case ActionLogActionTypes.ACTION_LOG_GET_FAIL: {
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
