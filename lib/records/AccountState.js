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

var _User = require('./User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaults = {
    REC_TYPE: 'AccountState',
    user: null,
    errors: new _immutable.List(),
    loading: false
};

var AccountState = function (_record) {
    (0, _inherits3.default)(AccountState, _record);

    function AccountState() {
        (0, _classCallCheck3.default)(this, AccountState);
        return (0, _possibleConstructorReturn3.default)(this, _record.apply(this, arguments));
    }

    AccountState.fromJSON = function fromJSON() {
        var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return (0, _mappers.construct)(AccountState, json, {
            user: _mappers.resolve.as(_User2.default),
            errors: _mappers.resolveAll.with(String),
            loading: _mappers.fields.boolean
        });
    };

    return AccountState;
}((0, _immutable.Record)(defaults));

exports.default = AccountState;
module.exports = exports.default;