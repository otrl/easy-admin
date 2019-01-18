'use strict';

exports.__esModule = true;
exports.default = DictionaryReducer;

var _constants = require('../constants');

var _Dictionary = require('../records/Dictionary');

var _Dictionary2 = _interopRequireDefault(_Dictionary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DictionaryReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _Dictionary2.default();
    var action = arguments[1];

    switch (action.type) {
        case _constants.ConfigActions.SETUP:
            {
                state = state.overrideMessages(action.config.language);
                break;
            }
    }
    return state;
}
module.exports = exports.default;