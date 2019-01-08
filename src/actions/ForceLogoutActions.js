import { ForceLogoutActionTypes } from '../constants';

import ForceLogout from '../services/ForceLogout';

const ForceLogoutActions = {
    logout: (ids) => async dispatch => {
        try {
            dispatch({type: ForceLogoutActionTypes.FORCE_LOGOUT_START});
            await ForceLogout.logout(ids);
            dispatch({type: ForceLogoutActionTypes.FORCE_LOGOUT_SUCCESS});
            return Promise.resolve();
        } catch (err) {
            dispatch({type: ForceLogoutActionTypes.FORCE_LOGOUT_FAIL});
            return Promise.reject(err);
        }
    },
};

export default ForceLogoutActions;
