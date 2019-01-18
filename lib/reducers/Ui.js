'use strict';

exports.__esModule = true;
exports.default = UiReducer;

var _immutable = require('immutable');

var _constants = require('../constants');

var _UiState = require('../records/UiState');

var _UiState2 = _interopRequireDefault(_UiState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UiReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _UiState2.default();
    var action = arguments[1];

    switch (action.type) {
        case _constants.UiActionTypes.TOGGLE_NAV:
            {
                state = state.set("navCollapsed", !state.navCollapsed);
                break;
            }
        case _constants.UiActionTypes.SET_PATH_MATCH:
            {
                state = state.set("currentPathMatch", new _immutable.List(action.pathMatchArray));
                break;
            }
        case _constants.UiActionTypes.LOADING_START:
            {
                state = state.addToLoading(action.id);
                break;
            }
        case _constants.UiActionTypes.LOADING_END:
            {
                state = state.removeFromLoading(action.id);
                break;
            }
        case _constants.UiActionTypes.LOADING_CLEAR_ALL:
            {
                state = state.clearLoading();
                break;
            }
    }
    return state;
}
module.exports = exports.default;