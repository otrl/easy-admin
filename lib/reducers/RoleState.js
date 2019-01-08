'use strict';

exports.__esModule = true;
exports.default = RoleState;

var _immutable = require('immutable');

var _constants = require('../constants');

var _RoleState = require('../records/RoleState');

var _RoleState2 = _interopRequireDefault(_RoleState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RoleState() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _RoleState2.default();
    var action = arguments[1];

    switch (action.type) {
        case _constants.RolesActionTypes.ROLE_GET_START:
            {
                state = state.merge({
                    loading: true,
                    errors: new _immutable.List()
                });
                break;
            }
        case _constants.RolesActionTypes.ROLE_GET_SUCCESS:
            {
                state = state.merge({
                    loading: false,
                    role: action.role
                });
                break;
            }
        case _constants.RolesActionTypes.ROLE_GET_FAIL:
            {
                state = state.merge({
                    loading: false,
                    errors: action.errors
                });
                break;
            }
        case _constants.RolesActionTypes.ROLE_UPDATE_START:
            {
                state = state.merge({
                    loading: true,
                    role: state.role.merge({
                        name: action.roleData.name,
                        description: action.roleData.description,
                        permissions: new _immutable.List(action.roleData.permissions)
                    })
                });
                break;
            }
        case _constants.RolesActionTypes.ROLE_UPDATE_SUCCESS:
            {
                state = state.merge({
                    loading: false
                });
                break;
            }
        case _constants.RolesActionTypes.ROLE_UPDATE_FAIL:
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