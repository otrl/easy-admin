'use strict';

exports.__esModule = true;
exports.default = UserState;

var _immutable = require('immutable');

var _constants = require('../constants');

var _UserState = require('../records/UserState');

var _UserState2 = _interopRequireDefault(_UserState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UserState() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _UserState2.default();
    var action = arguments[1];

    switch (action.type) {
        case _constants.UsersActionTypes.USER_GET_START:
            {
                state = state.merge({
                    loading: true,
                    errors: new _immutable.List()
                });
                break;
            }
        case _constants.UsersActionTypes.USER_GET_SUCCESS:
            {
                state = state.merge({
                    loading: false,
                    user: action.user
                });
                break;
            }
        case _constants.UsersActionTypes.USER_GET_FAIL:
            {
                state = state.merge({
                    loading: false,
                    errors: action.errors
                });
                break;
            }
        case _constants.UsersActionTypes.USER_UPDATE_START:
            {
                state = state.merge({
                    loading: true,
                    user: state.user.merge({
                        email: action.userData.email,
                        description: action.userData.description,
                        first_name: action.userData.first_name,
                        last_name: action.userData.last_name,
                        role_id: action.userData.role_id
                    })
                });
                break;
            }
        case _constants.UsersActionTypes.USER_UPDATE_SUCCESS:
            {
                state = state.merge({
                    loading: false
                });
                break;
            }
        case _constants.UsersActionTypes.USER_UPDATE_FAIL:
            {
                state = state.merge({
                    loading: false
                });
                break;
            }
    }
    return state;
}
module.exports = exports.default;