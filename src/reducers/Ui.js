import {List} from 'immutable';

import {UiActionTypes} from '../constants';

import UiState from '../records/UiState';

export default function UiReducer(state = new UiState(), action) {
    switch (action.type) {
        case UiActionTypes.TOGGLE_NAV: {
            state = state.set("navCollapsed", !state.navCollapsed);
            break;
        }
        case UiActionTypes.SET_PATH_MATCH: {
            state = state.set("currentPathMatch", new List(action.pathMatchArray));
            break;
        }
        case UiActionTypes.LOADING_START: {
            state = state.addToLoading(action.id);
            break;
        }
        case UiActionTypes.LOADING_END: {
            state = state.removeFromLoading(action.id);
            break;
        }
        case UiActionTypes.LOADING_CLEAR_ALL: {
            state = state.clearLoading();
            break;
        }
    }
    return state;
}
