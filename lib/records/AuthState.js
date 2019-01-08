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
    REC_TYPE: 'AuthState',
    user: null
};

var AuthState = function (_record) {
    (0, _inherits3.default)(AuthState, _record);

    function AuthState() {
        (0, _classCallCheck3.default)(this, AuthState);
        return (0, _possibleConstructorReturn3.default)(this, _record.apply(this, arguments));
    }

    AuthState.fromJSON = function fromJSON() {
        var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return (0, _mappers.construct)(AuthState, json, {
            user: _mappers.resolve.as(_User2.default)
        });
    };

    return AuthState;
}((0, _immutable.Record)(defaults));

exports.default = AuthState;
module.exports = exports.default;