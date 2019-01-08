'use strict';

exports.__esModule = true;
exports.default = UsersOptionsState;

var _immutable = require('immutable');

var _constants = require('../constants');

var _UsersOptionsState = require('../records/UsersOptionsState');

var _UsersOptionsState2 = _interopRequireDefault(_UsersOptionsState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UsersOptionsState() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _UsersOptionsState2.default();
    var action = arguments[1];

    switch (action.type) {
        case _constants.UsersOptionsActionTypes.USERS_OPTIONS_GET_START:
            {
                state = state.merge({
                    loading: true,
                    searchString: action.searchString,
                    users: new _immutable.List(),
                    errors: new _immutable.List()
                });
                break;
            }
        case _constants.UsersOptionsActionTypes.USERS_OPTIONS_GET_SUCCESS:
            {
                state = state.merge({
                    loading: false,
                    users: action.users
                });
                break;
            }
        case _constants.UsersOptionsActionTypes.USERS_OPTIONS_GET_FAIL:
            {
                state = state.merge({
                    loading: false,
                    errors: action.errors
                });
                break;
            }
    }
    return state;
}
module.exports = exports.default;