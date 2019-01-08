import { RolesOptionsActionTypes } from '../constants';

import RolesOptionsService from '../services/RolesOptions';

const RolesOptionsActions = {
    getList: () => async dispatch => {
        try {
            dispatch({type: RolesOptionsActionTypes.ROLES_OPTIONS_GET_START});
            const roles = await RolesOptionsService.getList();
            dispatch({type: RolesOptionsActionTypes.ROLES_OPTIONS_GET_SUCCESS, roles});
        } catch (err) {
            dispatch({type: RolesOptionsActionTypes.ROLES_OPTIONS_GET_FAIL});
        }
    },
};

export default RolesOptionsActions;
