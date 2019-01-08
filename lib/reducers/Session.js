'use strict';

exports.__esModule = true;
exports.default = SessionReducer;

var _constants = require('../constants');

var _momentTimezone = require('moment-timezone');

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

var _Session = require('../records/Session');

var _Session2 = _interopRequireDefault(_Session);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SessionReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _Session2.default();
    var action = arguments[1];

    var newExpiry = (0, _momentTimezone2.default)().add(_constants.SessionDuration, 's');
    if (state.sessionExpiry && !state.sessionExpiry.isSame(newExpiry, 'second')) {
        state = state.set('sessionExpiry', newExpiry);
    }

    switch (action.type) {
        case _constants.SessionActionTypes.SESSION_SET_EXPIRY:
            {
                state = state.set('sessionExpiry', action.sessionExpiry);
                break;
            }
    }
    return state;
}
module.exports = exports.default;