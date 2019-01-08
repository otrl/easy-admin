import {SessionActionTypes, SessionDuration} from '../constants';
import moment from 'moment-timezone';

import Session from '../records/Session';

export default function SessionReducer (state = new Session(), action) {
    const newExpiry = moment().add(SessionDuration, 's');
    if (state.sessionExpiry && !state.sessionExpiry.isSame(newExpiry, 'second')) {
        state = state.set('sessionExpiry', newExpiry);
    }

    switch (action.type) {
        case SessionActionTypes.SESSION_SET_EXPIRY: {
            state = state.set('sessionExpiry', action.sessionExpiry );
            break;
        }
    }
    return state;
}

