import { ConfigActions } from '../constants';

import Config from '../records/Config';

export default function ConfigReducer(state = new Config(), action) {
    switch (action.type) {
        case ConfigActions.SETUP: {
            state = new Config(action.config);
            break;
        }
    }
    return state;
}
