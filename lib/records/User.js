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

var _Role = require('./Role');

var _Role2 = _interopRequireDefault(_Role);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaults = {
    REC_TYPE: 'User',
    id: null,
    email: null,
    first_name: null,
    last_name: null,
    has_original_password: false,
    token_count: 0,
    role_id: null,
    role: null,
    created_at: null,
    updated_at: null
};

var User = function (_record) {
    (0, _inherits3.default)(User, _record);

    function User() {
        (0, _classCallCheck3.default)(this, User);
        return (0, _possibleConstructorReturn3.default)(this, _record.apply(this, arguments));
    }

    User.fromJSON = function fromJSON() {
        var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return (0, _mappers.construct)(User, json, {
            id: _mappers.fields.number,
            email: _mappers.fields.string,
            first_name: _mappers.fields.string,
            last_name: _mappers.fields.string,
            has_original_password: _mappers.fields.boolean,
            role_id: _mappers.fields.number,
            role: _mappers.resolve.as(_Role2.default),
            token_count: _mappers.fields.number,
            created_at: _mappers.fields.datetime,
            updated_at: _mappers.fields.datetime
        });
    };

    User.prototype.hasPermission = function hasPermission(permission) {
        return this.role && this.role.hasPermission(permission);
    };

    return User;
}((0, _immutable.Record)(defaults));

exports.default = User;
module.exports = exports.default;