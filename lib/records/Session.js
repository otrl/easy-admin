'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _immutable = require('immutable');

var _momentTimezone = require('moment-timezone');

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

var _mappers = require('../helpers/mappers');

var _uuid = require('../helpers/uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaults = {
    REC_TYPE: 'Session',
    sessionId: (0, _uuid2.default)(),
    sessionExpiry: (0, _momentTimezone2.default)().add(_constants.SessionDuration, 's')
};

var Session = function (_record) {
    (0, _inherits3.default)(Session, _record);

    function Session() {
        (0, _classCallCheck3.default)(this, Session);
        return (0, _possibleConstructorReturn3.default)(this, _record.apply(this, arguments));
    }

    Session.fromJSON = function fromJSON() {
        var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return (0, _mappers.construct)(Session, json, {
            sessionId: _mappers.fields.string,
            sessionExpiry: _mappers.fields.datetime
        });
    };

    return Session;
}((0, _immutable.Record)(defaults));

exports.default = Session;
module.exports = exports.default;