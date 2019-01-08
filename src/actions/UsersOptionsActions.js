import { UsersOptionsActionTypes } from '../constants';

import UsersOptionsService from '../services/UsersOptions';

const UsersOptionsActions = {
    getList: (searchString) => async dispatch => {
        try {
            dispatch({type: UsersOptionsActionTypes.USERS_OPTIONS_GET_START, searchString});
            const users = await UsersOptionsService.getList(searchString);
            dispatch({type: UsersOptionsActionTypes.USERS_OPTIONS_GET_SUCCESS, users});
        } catch (err) {
            dispatch({type: UsersOptionsActionTypes.USERS_OPTIONS_GET_FAIL});
        }
    },
};

export default UsersOptionsActions;
