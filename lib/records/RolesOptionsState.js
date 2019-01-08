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
    REC_TYPE: 'RolesOptionsState',
    roles: new _immutable.List(),
    errors: new _immutable.List(),
    loading: false
};

var RolesOptionsState = function (_record) {
    (0, _inherits3.default)(RolesOptionsState, _record);

    function RolesOptionsState() {
        (0, _classCallCheck3.default)(this, RolesOptionsState);
        return (0, _possibleConstructorReturn3.default)(this, _record.apply(this, arguments));
    }

    RolesOptionsState.fromJSON = function fromJSON() {
        var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return (0, _mappers.construct)(RolesOptionsState, json, {
            roles: _mappers.resolveAll.as(_Role2.default),
            errors: _mappers.resolveAll.with(String),
            loading: _mappers.fields.boolean
        });
    };

    return RolesOptionsState;
}((0, _immutable.Record)(defaults));

exports.default = RolesOptionsState;
module.exports = exports.default;