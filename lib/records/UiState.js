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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaults = {
    REC_TYPE: 'UiState',
    loading: new _immutable.Set(),
    navCollapsed: false,
    currentPathMatch: new _immutable.List()
};

var UiState = function (_record) {
    (0, _inherits3.default)(UiState, _record);

    function UiState() {
        (0, _classCallCheck3.default)(this, UiState);
        return (0, _possibleConstructorReturn3.default)(this, _record.apply(this, arguments));
    }

    UiState.fromJSON = function fromJSON() {
        var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return (0, _mappers.construct)(UiState, json, {
            loading: _mappers.resolve.with(_immutable.Set),
            navCollapsed: _mappers.resolve.as(Boolean),
            currentPathMatch: resolveAll.as(String)
        });
    };

    UiState.prototype.isLoading = function isLoading() {
        return this.loading.size > 0;
    };

    UiState.prototype.addToLoading = function addToLoading(id) {
        return this.set('loading', this.loading.add(id));
    };

    UiState.prototype.removeFromLoading = function removeFromLoading(id) {
        return this.set('loading', this.loading.delete(id));
    };

    UiState.prototype.clearLoading = function clearLoading() {
        return this.set('loading', new _immutable.Set());
    };

    return UiState;
}((0, _immutable.Record)(defaults));

exports.default = UiState;
module.exports = exports.default;