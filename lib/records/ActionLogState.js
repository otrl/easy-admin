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

var _ActionLogSearch = require('./ActionLogSearch');

var _ActionLogSearch2 = _interopRequireDefault(_ActionLogSearch);

var _LoggedAction = require('./LoggedAction');

var _LoggedAction2 = _interopRequireDefault(_LoggedAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaults = {
    REC_TYPE: 'ActionLogState',
    errors: new _immutable.List(),
    loggedActions: new _immutable.List(),
    loading: false,
    count: 0,
    search: new _ActionLogSearch2.default()
};

var ActionLogState = function (_record) {
    (0, _inherits3.default)(ActionLogState, _record);

    function ActionLogState() {
        (0, _classCallCheck3.default)(this, ActionLogState);
        return (0, _possibleConstructorReturn3.default)(this, _record.apply(this, arguments));
    }

    ActionLogState.fromJSON = function fromJSON() {
        var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return (0, _mappers.construct)(ActionLogState, json, {
            loggedActions: _mappers.resolveAll.as(_LoggedAction2.default),
            errors: _mappers.resolveAll.with(String),
            loading: _mappers.fields.boolean,
            search: _mappers.resolve.as(_ActionLogSearch2.default),
            count: _mappers.fields.number
        });
    };

    return ActionLogState;
}((0, _immutable.Record)(defaults));

exports.default = ActionLogState;
module.exports = exports.default;