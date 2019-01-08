'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _immutable = require('immutable');

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

var _defaultConfig = require('../default-config');

var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

var _mappers = require('../helpers/mappers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaults = {
    page: _defaultConfig2.default.paginationDefaults.page,
    limit: _defaultConfig2.default.paginationDefaults.limit,
    count: 0
};

var Pagination = function (_record) {
    (0, _inherits3.default)(Pagination, _record);

    function Pagination() {
        (0, _classCallCheck3.default)(this, Pagination);
        return (0, _possibleConstructorReturn3.default)(this, _record.apply(this, arguments));
    }

    Pagination.fromJSON = function fromJSON() {
        var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return (0, _mappers.construct)(Pagination, json, {
            page: _mappers.fields.number,
            limit: _mappers.fields.number,
            count: _mappers.fields.number
        });
    };

    Pagination.prototype.toQueryString = function toQueryString() {
        var attributes = {};
        if (this.page !== defaults.page) {
            attributes.page = this.page;
        }

        if (this.limit !== defaults.limit) {
            attributes.limit = this.limit;
        }
        return _qs2.default.stringify(attributes);
    };

    return Pagination;
}((0, _immutable.Record)(defaults));

exports.default = Pagination;
module.exports = exports.default;