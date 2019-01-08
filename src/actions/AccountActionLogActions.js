import {AccountActionLogActionTypes} from '../constants';

import AccountActionLogService from '../services/AccountActionLog';

const AccountActionLogActions = {
    getActionLog: (search) => async dispatch => {
        try {
            dispatch({type: AccountActionLogActionTypes.ACCOUNT_ACTION_LOG_GET_START, search});
            const {actions, count} = await AccountActionLogService.getList(search);
            dispatch({type: AccountActionLogActionTypes.ACCOUNT_ACTION_LOG_GET_SUCCESS, actions, count});
        } catch (err) {
            console.log("err", err);
            dispatch({type: AccountActionLogActionTypes.ACCOUNT_ACTION_LOG_GET_FAIL});
        }
    },
};

export default AccountActionLogActions;
