'use strict';

exports.__esModule = true;
exports.default = AccountState;

var _immutable = require('immutable');

var _constants = require('../constants');

var _AccountState = require('../records/AccountState');

var _AccountState2 = _interopRequireDefault(_AccountState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AccountState() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _AccountState2.default();
    var action = arguments[1];

    switch (action.type) {
        case _constants.AccountActionTypes.ACCOUNT_GET_START:
            {
                state = state.merge({
                    loading: true,
                    errors: new _immutable.List()
                });
                break;
            }
        case _constants.AccountActionTypes.ACCOUNT_GET_SUCCESS:
            {
                state = state.merge({
                    loading: false,
                    user: action.user
                });
                break;
            }
        case _constants.AccountActionTypes.ACCOUNT_GET_FAIL:
            {
                state = state.merge({
                    loading: false,
                    errors: action.errors
                });
                break;
            }
        case _constants.AccountActionTypes.ACCOUNT_UPDATE_START:
            {
                state = state.merge({
                    loading: true,
                    user: state.user.merge({
                        email: action.userData.email,
                        description: action.userData.description,
                        first_name: action.userData.first_name,
                        last_name: action.userData.last_name
                    })
                });
                break;
            }
        case _constants.AccountActionTypes.ACCOUNT_UPDATE_SUCCESS:
            {
                state = state.merge({
                    loading: false
                });
                break;
            }
        case _constants.AccountActionTypes.ACCOUNT_UPDATE_FAIL:
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