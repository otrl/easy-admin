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

var _Pagination = require('./Pagination');

var _Pagination2 = _interopRequireDefault(_Pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaults = {
    REC_TYPE: 'UsersState',
    users: new _immutable.List(),
    errors: new _immutable.List(),
    loading: false,
    pagination: new _Pagination2.default()
};

var UsersState = function (_record) {
    (0, _inherits3.default)(UsersState, _record);

    function UsersState() {
        (0, _classCallCheck3.default)(this, UsersState);
        return (0, _possibleConstructorReturn3.default)(this, _record.apply(this, arguments));
    }

    UsersState.fromJSON = function fromJSON() {
        var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return (0, _mappers.construct)(UsersState, json, {
            users: _mappers.resolveAll.as(_User2.default),
            errors: _mappers.resolveAll.with(String),
            loading: _mappers.fields.boolean,
            pagination: _mappers.resolve.as(_Pagination2.default)
        });
    };

    return UsersState;
}((0, _immutable.Record)(defaults));

exports.default = UsersState;
module.exports = exports.default;