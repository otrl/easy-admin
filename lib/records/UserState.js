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
    REC_TYPE: 'UserState',
    user: null,
    errors: new _immutable.List(),
    loading: false
};

var UserState = function (_record) {
    (0, _inherits3.default)(UserState, _record);

    function UserState() {
        (0, _classCallCheck3.default)(this, UserState);
        return (0, _possibleConstructorReturn3.default)(this, _record.apply(this, arguments));
    }

    UserState.fromJSON = function fromJSON() {
        var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return (0, _mappers.construct)(UserState, json, {
            user: _mappers.resolve.as(_User2.default),
            errors: _mappers.resolveAll.with(String),
            loading: _mappers.fields.boolean
        });
    };

    return UserState;
}((0, _immutable.Record)(defaults));

exports.default = UserState;
module.exports = exports.default;