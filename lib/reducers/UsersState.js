'use strict';

exports.__esModule = true;
exports.default = UsersState;

var _immutable = require('immutable');

var _constants = require('../constants');

var _UsersState = require('../records/UsersState');

var _UsersState2 = _interopRequireDefault(_UsersState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UsersState() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _UsersState2.default();
    var action = arguments[1];

    switch (action.type) {
        case _constants.UsersActionTypes.USERS_GET_START:
            {
                state = state.merge({
                    loading: true,
                    pagination: state.pagination.merge({
                        page: action.page,
                        limit: action.limit
                    }),
                    errors: new _immutable.List()
                });
                break;
            }
        case _constants.UsersActionTypes.USERS_GET_SUCCESS:
            {
                state = state.merge({
                    loading: false,
                    users: action.users,
                    pagination: state.pagination.set("count", action.count)
                });
                break;
            }
        case _constants.UsersActionTypes.USERS_GET_FAIL:
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