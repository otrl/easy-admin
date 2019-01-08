'use strict';

exports.__esModule = true;
exports.default = RolesOptionsState;

var _immutable = require('immutable');

var _constants = require('../constants');

var _RolesOptionsState = require('../records/RolesOptionsState');

var _RolesOptionsState2 = _interopRequireDefault(_RolesOptionsState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RolesOptionsState() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _RolesOptionsState2.default();
    var action = arguments[1];

    switch (action.type) {
        case _constants.RolesOptionsActionTypes.ROLES_OPTIONS_GET_START:
            {
                state = state.merge({
                    loading: true,
                    roles: new _immutable.List(),
                    errors: new _immutable.List()
                });
                break;
            }
        case _constants.RolesOptionsActionTypes.ROLES_OPTIONS_GET_SUCCESS:
            {
                state = state.merge({
                    loading: false,
                    roles: action.roles
                });
                break;
            }
        case _constants.RolesOptionsActionTypes.ROLES_OPTIONS_GET_FAIL:
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