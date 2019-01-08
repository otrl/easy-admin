import { ConfigActions as actions } from '../constants';

const ConfigActions = {
    setConfig: (config) => dispatch => {
        dispatch({type: actions.SETUP, config});
    }
};

export default ConfigActions;
