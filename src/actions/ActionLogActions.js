import {ActionLogActionTypes} from '../constants';

import ActionLogService from '../services/ActionLog';

const ActionLogActions = {
    getActionLog: (search) => async dispatch => {
        try {
            dispatch({type: ActionLogActionTypes.ACTION_LOG_GET_START, search});
            const {actions, count} = await ActionLogService.getList(search);
            dispatch({type: ActionLogActionTypes.ACTION_LOG_GET_SUCCESS, actions, count});
        } catch (err) {
            console.error(err);
            dispatch({type: ActionLogActionTypes.ACTION_LOG_GET_FAIL});
        }
    },
};

export default ActionLogActions;
