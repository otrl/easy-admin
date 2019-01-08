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

var _Pagination = require('./Pagination');

var _Pagination2 = _interopRequireDefault(_Pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaults = {
    REC_TYPE: 'RolesState',
    roles: new _immutable.List(),
    errors: new _immutable.List(),
    loading: false,
    pagination: new _Pagination2.default()
};

var RolesState = function (_record) {
    (0, _inherits3.default)(RolesState, _record);

    function RolesState() {
        (0, _classCallCheck3.default)(this, RolesState);
        return (0, _possibleConstructorReturn3.default)(this, _record.apply(this, arguments));
    }

    RolesState.fromJSON = function fromJSON() {
        var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return (0, _mappers.construct)(RolesState, json, {
            roles: _mappers.resolveAll.as(_Role2.default),
            errors: _mappers.resolveAll.with(String),
            loading: _mappers.fields.boolean,
            pagination: _mappers.resolve.as(_Pagination2.default)
        });
    };

    return RolesState;
}((0, _immutable.Record)(defaults));

exports.default = RolesState;
module.exports = exports.default;