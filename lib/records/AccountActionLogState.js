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

var _AccountActionLogSearch = require('./AccountActionLogSearch');

var _AccountActionLogSearch2 = _interopRequireDefault(_AccountActionLogSearch);

var _LoggedAction = require('./LoggedAction');

var _LoggedAction2 = _interopRequireDefault(_LoggedAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaults = {
    REC_TYPE: 'AccountActionLogState',
    errors: new _immutable.List(),
    loggedActions: new _immutable.List(),
    loading: false,
    count: 0,
    search: new _AccountActionLogSearch2.default()
};

var AccountActionLogState = function (_record) {
    (0, _inherits3.default)(AccountActionLogState, _record);

    function AccountActionLogState() {
        (0, _classCallCheck3.default)(this, AccountActionLogState);
        return (0, _possibleConstructorReturn3.default)(this, _record.apply(this, arguments));
    }

    AccountActionLogState.fromJSON = function fromJSON() {
        var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return (0, _mappers.construct)(AccountActionLogState, json, {
            loggedActions: _mappers.resolveAll.as(_LoggedAction2.default),
            errors: _mappers.resolveAll.with(String),
            loading: _mappers.fields.boolean,
            search: _mappers.resolve.as(_AccountActionLogSearch2.default),
            count: _mappers.fields.number
        });
    };

    return AccountActionLogState;
}((0, _immutable.Record)(defaults));

exports.default = AccountActionLogState;
module.exports = exports.default;