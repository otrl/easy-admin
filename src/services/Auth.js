import Cookies from 'js-cookie';

import Api from '../helpers/Api';
import User from '../records/User';
import {AccessTokenCookiePath, RefreshTokenCookiePath} from '../constants';

class AuthService {
    static async login (email, password) {
        try {
            const apiClient = new Api();
            const result = await apiClient.post('/authenticate', {
                email,
                password
            });

            const {
                accessToken,
                accessTokenExpiry,
                refreshToken,
                refreshTokenExpiry
            } = result.data;

            Cookies.set(AccessTokenCookiePath, accessToken, {expires: new Date(accessTokenExpiry), secure: true});
            Cookies.set(RefreshTokenCookiePath, refreshToken, {expires: new Date(refreshTokenExpiry), secure: true});

            const userResult = await apiClient.get('/account', {headers: {Authorization: accessToken}});

            return User.fromJSON(userResult.data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    static async logout (userId) {
        try {
            const apiClient = new Api();
            await apiClient.post('/logout', { userId });
            return Promise.resolve();
        } catch (err) {
            console.error(err);
            return Promise.reject(err);
        }
    }
}

export default AuthService;
