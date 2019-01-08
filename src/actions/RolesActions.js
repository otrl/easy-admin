import { RolesActionTypes } from '../constants';

import RolesService from '../services/Roles';

const RolesActions = {
    getList: (page, limit) => async dispatch => {
        try {
            dispatch({type: RolesActionTypes.ROLES_GET_START, page, limit});
            const {roles, count} = await RolesService.getList(page, limit);
            dispatch({type: RolesActionTypes.ROLES_GET_SUCCESS, roles, count});
        } catch (err) {
            dispatch({type: RolesActionTypes.ROLES_GET_FAIL});
        }
    },

    get: (id) => async dispatch => {
        try {
            dispatch({type: RolesActionTypes.ROLE_GET_START});
            const role = await RolesService.get(id);
            dispatch({type: RolesActionTypes.ROLE_GET_SUCCESS, role});
        } catch (err) {
            dispatch({type: RolesActionTypes.ROLE_GET_FAIL});
        }
    },

    create: (role) => async dispatch => {
        try {
            dispatch({type: RolesActionTypes.ROLE_CREATE_START});
            await RolesService.create(role);
            dispatch({type: RolesActionTypes.ROLE_CREATE_SUCCESS});
            return Promise.resolve();
        } catch (err) {
            dispatch({type: RolesActionTypes.ROLE_CREATE_FAIL});
            return Promise.reject(err);
        }
    },

    update: (id, roleData) => async dispatch => {
        try {
            dispatch({type: RolesActionTypes.ROLE_UPDATE_START, roleData});
            await RolesService.update(id, roleData);
            dispatch({type: RolesActionTypes.ROLE_UPDATE_SUCCESS});
            return Promise.resolve();
        } catch (err) {
            dispatch({type: RolesActionTypes.ROLE_UPDATE_FAIL});
            return Promise.reject(err);
        }
    },

    delete: (id) => async dispatch => {
        try {
            dispatch({type: RolesActionTypes.ROLES_DELETE_START});
            await RolesService.delete(id);
            dispatch({type: RolesActionTypes.ROLES_DELETE_SUCCESS});
            return Promise.resolve();
        } catch (err) {
            dispatch({type: RolesActionTypes.ROLES_DELETE_FAIL});
            return Promise.reject(err);
        }
    },

    deleteList: (ids) => async dispatch => {
        try {
            dispatch({type: RolesActionTypes.ROLES_DELETE_START});
            await RolesService.deleteList(ids);
            dispatch({type: RolesActionTypes.ROLES_DELETE_SUCCESS});
            return Promise.resolve();
        } catch (err) {
            dispatch({type: RolesActionTypes.ROLES_DELETE_FAIL});
            return Promise.reject(err);
        }
    },
};

export default RolesActions;
