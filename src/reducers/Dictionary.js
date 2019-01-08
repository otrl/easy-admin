import { ConfigActions } from '../constants';

import Dictionary from '../records/Dictionary';

export default function DictionaryReducer(state = new Dictionary(), action) {
    switch (action.type) {
        case ConfigActions.SETUP: {
            state = state.overrideMessages(action.config.language);
            console.log(state);
            break;
        }
    }
    return state;
}
