"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _immutable = require("immutable");

var _mappers = require("../helpers/mappers");

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaults = {
    REC_TYPE: 'Role',
    id: null,
    name: null,
    description: null,
    permissions: new _immutable.List()
};

var Role = function (_record) {
    (0, _inherits3.default)(Role, _record);

    function Role() {
        (0, _classCallCheck3.default)(this, Role);
        return (0, _possibleConstructorReturn3.default)(this, _record.apply(this, arguments));
    }

    Role.fromJSON = function fromJSON() {
        var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return (0, _mappers.construct)(Role, json, {
            id: _mappers.fields.number,
            name: _mappers.fields.string,
            description: _mappers.fields.string,
            permissions: _mappers.resolveAll.with(String)
        });
    };

    Role.prototype.hasPermission = function hasPermission(permission) {
        return this.permissions.includes(permission) || this.permissions.includes(_constants.Permissions.ALL);
    };

    return Role;
}((0, _immutable.Record)(defaults));

exports.default = Role;
module.exports = exports.default;