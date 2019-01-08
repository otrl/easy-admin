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
    REC_TYPE: 'ActionLogSearch',
    fromDate: null,
    toDate: null,
    userId: null,
    action: null,
    resourceType: null,
    page: _defaultConfig2.default.paginationDefaults.page,
    limit: _defaultConfig2.default.paginationDefaults.limit
};

var ActionLogSearch = function (_record) {
    (0, _inherits3.default)(ActionLogSearch, _record);

    function ActionLogSearch() {
        (0, _classCallCheck3.default)(this, ActionLogSearch);
        return (0, _possibleConstructorReturn3.default)(this, _record.apply(this, arguments));
    }

    ActionLogSearch.fromJSON = function fromJSON() {
        var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return (0, _mappers.construct)(ActionLogSearch, json, {
            fromDate: _mappers.fields.datetime,
            toDate: _mappers.fields.datetime,
            userId: _mappers.fields.number,
            action: _mappers.fields.number,
            resourceType: _mappers.fields.number,
            page: _mappers.fields.number,
            limit: _mappers.fields.number
        });
    };

    ActionLogSearch.prototype.toQueryString = function toQueryString() {
        var attributes = {};
        if (this.fromDate && this.fromDate !== defaults.fromDate) {
            attributes.fromDate = this.fromDate.format("YYYY-MM-DD");
        }

        if (this.toDate && this.toDate !== defaults.toDate) {
            attributes.toDate = this.toDate.format("YYYY-MM-DD");
        }

        if (this.userId) {
            attributes.userId = this.userId;
        }

        if (this.action) {
            attributes.action = this.action;
        }

        if (this.resourceType) {
            attributes.resourceType = this.resourceType;
        }

        if (this.page !== defaults.page) {
            attributes.page = this.page;
        }

        if (this.limit !== defaults.limit) {
            attributes.limit = this.limit;
        }

        return _qs2.default.stringify(attributes);
    };

    return ActionLogSearch;
}((0, _immutable.Record)(defaults));

exports.default = ActionLogSearch;
module.exports = exports.default;