import {PasswordResetActionTypes} from '../constants';

import PasswordResetService from '../services/PasswordReset';

const PasswordResetActions = {
    requestPasswordReset: (email) => async dispatch => {
        try {
            dispatch({type: PasswordResetActionTypes.PASSWORD_RESET_REQUEST_START});
            await PasswordResetService.requestPasswordReset(email);
            dispatch({type: PasswordResetActionTypes.PASSWORD_RESET_REQUEST_SUCCESS});
            return Promise.resolve();
        } catch (err) {
            dispatch({type: PasswordResetActionTypes.PASSWORD_RESET_REQUEST_FAIL});
            return Promise.reject(err);
        }
    },
    resetPassword: (password, token) => async dispatch => {
        try {
            dispatch({type: PasswordResetActionTypes.PASSWORD_RESET_START});
            await PasswordResetService.resetPassword(password, token);
            dispatch({type: PasswordResetActionTypes.PASSWORD_RESET_SUCCESS});
            return Promise.resolve();
        } catch (err) {
            dispatch({type: PasswordResetActionTypes.PASSWORD_RESET_FAIL});
            return Promise.reject(err);
        }
    },
};

export default PasswordResetActions;
