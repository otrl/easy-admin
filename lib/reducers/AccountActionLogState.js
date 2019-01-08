'use strict';

exports.__esModule = true;
exports.default = AccountActionLogState;

var _immutable = require('immutable');

var _constants = require('../constants');

var _AccountActionLogState = require('../records/AccountActionLogState');

var _AccountActionLogState2 = _interopRequireDefault(_AccountActionLogState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AccountActionLogState() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _AccountActionLogState2.default();
    var action = arguments[1];

    switch (action.type) {
        case _constants.AccountActionLogActionTypes.ACCOUNT_ACTION_LOG_GET_START:
            {
                state = state.merge({
                    loading: true,
                    search: action.search,
                    errors: new _immutable.List()
                });
                break;
            }
        case _constants.AccountActionLogActionTypes.ACCOUNT_ACTION_LOG_GET_SUCCESS:
            {
                state = state.merge({
                    loading: false,
                    loggedActions: action.actions,
                    count: action.count
                });
                break;
            }
        case _constants.AccountActionLogActionTypes.ACCOUNT_ACTION_LOG_GET_FAIL:
            {
                state = state.merge({
                    loading: false,
                    errors: action.errors,
                    loggedActions: new _immutable.List()
                });
                break;
            }
    }
    return state;
}
module.exports = exports.default;