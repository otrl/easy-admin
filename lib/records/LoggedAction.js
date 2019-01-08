'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _immutable = require('immutable');

var _mappers = require('../helpers/mappers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaults = {
    REC_TYPE: 'LoggedAction',
    id: null,
    resource_type: null,
    resource_identifier: null,
    action: null,
    user_id: null,
    user_name: null,
    created_at: null
};

var LoggedAction = function (_record) {
    (0, _inherits3.default)(LoggedAction, _record);

    function LoggedAction() {
        (0, _classCallCheck3.default)(this, LoggedAction);
        return (0, _possibleConstructorReturn3.default)(this, _record.apply(this, arguments));
    }

    LoggedAction.fromJSON = function fromJSON() {
        var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return (0, _mappers.construct)(LoggedAction, json, {
            id: _mappers.fields.number,
            resource_type: _mappers.fields.number,
            resource_identifier: _mappers.fields.string,
            action: _mappers.fields.number,
            user_id: _mappers.fields.number,
            user_name: _mappers.fields.string,
            created_at: _mappers.fields.datetime
        });
    };

    return LoggedAction;
}((0, _immutable.Record)(defaults));

exports.default = LoggedAction;
module.exports = exports.default;