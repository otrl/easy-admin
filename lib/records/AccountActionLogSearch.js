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

var _mappers = require('../helpers/mappers');

var _defaultConfig = require('../default-config');

var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaults = {
    REC_TYPE: 'AccountActionLogSearch',
    fromDate: null,
    toDate: null,
    page: _defaultConfig2.default.paginationDefaults.page,
    limit: _defaultConfig2.default.paginationDefaults.limit
};

var AccountActionLogSearch = function (_record) {
    (0, _inherits3.default)(AccountActionLogSearch, _record);

    function AccountActionLogSearch() {
        (0, _classCallCheck3.default)(this, AccountActionLogSearch);
        return (0, _possibleConstructorReturn3.default)(this, _record.apply(this, arguments));
    }

    AccountActionLogSearch.fromJSON = function fromJSON() {
        var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return (0, _mappers.construct)(AccountActionLogSearch, json, {
            fromDate: _mappers.fields.datetime,
            toDate: _mappers.fields.datetime,
            page: _mappers.fields.number,
            limit: _mappers.fields.number
        });
    };

    AccountActionLogSearch.prototype.toQueryString = function toQueryString() {
        var attributes = {};
        if (this.fromDate && this.fromDate !== defaults.fromDate) {
            attributes.fromDate = this.fromDate.format("YYYY-MM-DD");
        }

        if (this.toDate && this.toDate !== defaults.toDate) {
            attributes.toDate = this.toDate.format("YYYY-MM-DD");
        }

        if (this.page !== defaults.page) {
            attributes.page = this.page;
        }

        if (this.limit !== defaults.limit) {
            attributes.limit = this.limit;
        }

        return _qs2.default.stringify(attributes);
    };

    return AccountActionLogSearch;
}((0, _immutable.Record)(defaults));

exports.default = AccountActionLogSearch;
module.exports = exports.default;