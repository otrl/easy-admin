import { UiActionTypes } from '../constants';

const UiActions = {
    toggleNav: () => async dispatch => {
        dispatch({type: UiActionTypes.TOGGLE_NAV});
    },
    setPathMatch: (pathMatchArray) => async dispatch => {
        dispatch({type: UiActionTypes.SET_PATH_MATCH, pathMatchArray});
    },
};

export default UiActions;
