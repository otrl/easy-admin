'use strict';

exports.__esModule = true;
exports.default = AuthReducer;

var _jsCookie = require('js-cookie');

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _constants = require('../constants');

var _AuthState = require('../records/AuthState');

var _AuthState2 = _interopRequireDefault(_AuthState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AuthReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _AuthState2.default();
    var action = arguments[1];

    switch (action.type) {
        case _constants.AuthActionTypes.AUTH_LOGIN_SUCCESS:
        case _constants.AuthActionTypes.AUTH_USER_UPDATED:
            {
                state = state.set('user', action.user);
                break;
            }

        case _constants.AuthActionTypes.AUTH_LOGOUT:
            {
                _jsCookie2.default.remove(_constants.AccessTokenCookiePath);
                _jsCookie2.default.remove(_constants.RefreshTokenCookiePath);
                state = state.set('user', null);
                break;
            }
    }
    return state;
}
module.exports = exports.default;