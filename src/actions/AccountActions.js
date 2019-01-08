import {AccountActionTypes} from '../constants';

import AccountService from '../services/Account';

const AccountActions = {
    get: () => async dispatch => {
        try {
            dispatch({type: AccountActionTypes.ACCOUNT_GET_START});
            const user = await AccountService.get();
            dispatch({type: AccountActionTypes.ACCOUNT_GET_SUCCESS, user});
        } catch (err) {
            dispatch({type: AccountActionTypes.ACCOUNT_GET_FAIL});
        }
    },

    update: (userData) => async dispatch => {
        try {
            dispatch({type: AccountActionTypes.ACCOUNT_UPDATE_START, userData});
            await AccountService.update(userData);
            dispatch({type: AccountActionTypes.ACCOUNT_UPDATE_SUCCESS});
        } catch (err) {
            dispatch({type: AccountActionTypes.ACCOUNT_UPDATE_FAIL});
        }
    },
};

export default AccountActions;
