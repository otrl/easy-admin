'use strict';

exports.__esModule = true;
exports.default = ConfigReducer;

var _constants = require('../constants');

var _Config = require('../records/Config');

var _Config2 = _interopRequireDefault(_Config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ConfigReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _Config2.default();
    var action = arguments[1];

    switch (action.type) {
        case _constants.ConfigActions.SETUP:
            {
                state = new _Config2.default(action.config);
                break;
            }
    }
    return state;
}
module.exports = exports.default;