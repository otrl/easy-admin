import Cookies from 'js-cookie';

import { AuthActionTypes, ApiExceptions, TokenCookiePath } from '../constants';

import AuthService from '../services/Auth';

const AuthActions = {
    login: (email, password) => async dispatch => {
        try {
            const user = await AuthService.login(email, password);
            dispatch({type: AuthActionTypes.AUTH_LOGIN_SUCCESS, user});
            return Promise.resolve();
        } catch (err) {
            return Promise.reject(err);
        }
    },
    logout: () => async dispatch => {
        try {
            if (Cookies.get(TokenCookiePath)) {
                await AuthService.logout();
            }
            dispatch({type: AuthActionTypes.AUTH_LOGOUT});
            return Promise.resolve();
        } catch (err) {
            return Promise.reject(err);
        }
    }
};

export default AuthActions;
