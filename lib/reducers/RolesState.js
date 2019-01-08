'use strict';

exports.__esModule = true;
exports.default = RolesState;

var _immutable = require('immutable');

var _constants = require('../constants');

var _RolesState = require('../records/RolesState');

var _RolesState2 = _interopRequireDefault(_RolesState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RolesState() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _RolesState2.default();
    var action = arguments[1];

    switch (action.type) {
        case _constants.RolesActionTypes.ROLES_GET_START:
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
        case _constants.RolesActionTypes.ROLES_GET_SUCCESS:
            {
                state = state.merge({
                    loading: false,
                    roles: action.roles,
                    pagination: state.pagination.set("count", action.count)
                });
                break;
            }
        case _constants.RolesActionTypes.ROLES_GET_FAIL:
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