import { UsersActionTypes } from '../constants';

import UsersService from '../services/Users';

const UsersActions = {
    getList: (page, limit) => async dispatch => {
        try {
            dispatch({type: UsersActionTypes.USERS_GET_START, page, limit});
            const {users, count} = await UsersService.getList(page, limit);
            dispatch({type: UsersActionTypes.USERS_GET_SUCCESS, users, count});
        } catch (err) {
            dispatch({type: UsersActionTypes.USERS_GET_FAIL});
        }
    },

    get: (id) => async dispatch => {
        try {
            dispatch({type: UsersActionTypes.USER_GET_START});
            const user = await UsersService.get(id);
            dispatch({type: UsersActionTypes.USER_GET_SUCCESS, user});
        } catch (err) {
            dispatch({type: UsersActionTypes.USER_GET_FAIL});
        }
    },

    create: (user) => async dispatch => {
        try {
            dispatch({type: UsersActionTypes.USER_CREATE_START});
            await UsersService.create(user);
            dispatch({type: UsersActionTypes.USER_CREATE_SUCCESS});
            return Promise.resolve();
        } catch (err) {
            dispatch({type: UsersActionTypes.USER_CREATE_FAIL});
            return Promise.reject(err);
        }
    },

    update: (id, userData) => async dispatch => {
        try {
            dispatch({type: UsersActionTypes.USER_UPDATE_START, userData});
            await UsersService.update(id, userData);
            dispatch({type: UsersActionTypes.USER_UPDATE_SUCCESS});
            return Promise.resolve();
        } catch (err) {
            dispatch({type: UsersActionTypes.USER_UPDATE_FAIL});
            return Promise.reject(err);
        }
    },

    delete: (id) => async dispatch => {
        try {
            dispatch({type: UsersActionTypes.USERS_DELETE_START});
            await UsersService.delete(id);
            dispatch({type: UsersActionTypes.USERS_DELETE_SUCCESS});
            return Promise.resolve();
        } catch (err) {
            dispatch({type: UsersActionTypes.USERS_DELETE_FAIL});
            return Promise.reject(err);
        }
    },

    deleteList: (ids) => async dispatch => {
        try {
            dispatch({type: UsersActionTypes.USERS_DELETE_START});
            await UsersService.deleteList(ids);
            dispatch({type: UsersActionTypes.USERS_DELETE_SUCCESS});
            return Promise.resolve();
        } catch (err) {
            dispatch({type: UsersActionTypes.USERS_DELETE_FAIL});
            return Promise.reject(err);
        }
    },
};

export default UsersActions;
