import Cookies from 'js-cookie';
import {AuthActionTypes, AccessTokenCookiePath, RefreshTokenCookiePath} from '../constants';

import AuthState from '../records/AuthState';

export default function AuthReducer (state = new AuthState(), action) {
    switch (action.type) {
        case AuthActionTypes.AUTH_LOGIN_SUCCESS:
        case AuthActionTypes.AUTH_USER_UPDATED: {
            state = state.set('user', action.user);
            break;
        }

        case AuthActionTypes.AUTH_LOGOUT: {
            Cookies.remove(AccessTokenCookiePath);
            Cookies.remove(RefreshTokenCookiePath);
            state = state.set('user', null);
            break;
        }
    }
    return state;
}
