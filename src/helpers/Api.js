import axios from 'axios';
import Cookies from 'js-cookie';
import _ from 'lodash';

import {store} from '../store';
import {UiActionTypes, AccessTokenCookiePath, RefreshTokenCookiePath, AuthActionTypes} from '../constants';

let isTokenRefreshing = false;
let pendingRequests = [];

export default class ApiGateway {
    apiInstance = null;
    baseUrl = null;

    constructor() {
        const {config} = store.getState();
        this.baseUrl = config.api;
        this.apiInstance = axios.create({
            baseURL: `${this.baseUrl}/`
        });

        this.apiInstance.interceptors.request.use((config) => {
            const accessToken = Cookies.get(AccessTokenCookiePath);
            const processId = _.uniqueId();
            config.processId = processId;
            if (accessToken) {
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
            store.dispatch({type: UiActionTypes.LOADING_START, id: processId});
            return config;
        }, function (error) {
            return Promise.reject(error);
        });

        this.apiInstance.interceptors.response.use((res) => {
            if (res.config.processId) {
                store.dispatch({type: UiActionTypes.LOADING_END, id: res.config.processId});
            }
            return res;
        }, (err) => {
            const {config, response: {status}} = err;
            const originalRequest = config;
            const refreshToken = Cookies.get(RefreshTokenCookiePath);


            if (status === 401) {
                if (refreshToken) {

                    if (!isTokenRefreshing) {
                        isTokenRefreshing = true;
                        this.refreshAccessToken(refreshToken);
                    }

                    return new Promise((resolve, reject) => {
                        pendingRequests.push((refreshError, token) => {
                            if (refreshError) {
                                store.dispatch({type: UiActionTypes.LOADING_END, id: err.response.config.processId});
                                return reject(refreshError);
                            }
                            // replace the expired token and retry
                            originalRequest.headers.Authorization = `Bearer ${token}`;
                            axios(originalRequest).then(result => {
                                store.dispatch({type: UiActionTypes.LOADING_END, id: originalRequest.processId});
                                resolve(result);
                            }).catch(error => {
                                store.dispatch({type: UiActionTypes.LOADING_END, id: originalRequest.processId});
                                reject(error);
                            });
                        });
                    });
                } else {
                    store.dispatch({type: UiActionTypes.LOADING_END, id: err.response.config.processId});
                    store.dispatch({type: AuthActionTypes.AUTH_LOGOUT});
                    return Promise.reject(err);
                }
            } else {
                store.dispatch({type: UiActionTypes.LOADING_END, id: err.response.config.processId});
                return Promise.reject(err);
            }
        });

        return this.apiInstance;
    }

    async refreshAccessToken(oldRefreshToken) {
        try {
            const result = await axios.post(`${this.baseUrl}/refresh-tokens`, {refreshToken: oldRefreshToken});

            const {
                accessToken,
                accessTokenExpiry,
                refreshToken,
                refreshTokenExpiry
            } = result.data;

            Cookies.set(AccessTokenCookiePath, accessToken, {expires: new Date(accessTokenExpiry), secure: true});
            Cookies.set(RefreshTokenCookiePath, refreshToken, {expires: new Date(refreshTokenExpiry), secure: true});

            isTokenRefreshing = false;
            pendingRequests.map(cb => cb(null, accessToken));
            pendingRequests = [];
        } catch (error) {
            console.log(error);
            isTokenRefreshing = false;
            pendingRequests.map(cb => cb(error, null));
            pendingRequests = [];
            store.dispatch({type: AuthActionTypes.AUTH_LOGOUT});
        }
    }
}
