'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _immutable = require('immutable');

var _defaultConfig = require('../default-config');

var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

var _mappers = require('../helpers/mappers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaults = {
    REC_TYPE: 'Config',
    api: _defaultConfig2.default.api,
    gaProperty: _defaultConfig2.default.gaProperty,
    paginationDefaults: new _immutable.Map(_defaultConfig2.default.paginationDefaults),
    unauthorizedRedirectUrl: _defaultConfig2.default.unauthorizedRedirectUrl,
    homePageComponent: _defaultConfig2.default.homePageComponent,
    appTree: _defaultConfig2.default.appTree
};

var Config = function (_record) {
    (0, _inherits3.default)(Config, _record);

    function Config() {
        (0, _classCallCheck3.default)(this, Config);
        return (0, _possibleConstructorReturn3.default)(this, _record.apply(this, arguments));
    }

    Config.fromJSON = function fromJSON() {
        var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return (0, _mappers.construct)(Config, json, {
            api: _mappers.fields.string,
            gaProperty: _mappers.fields.string,
            paginationDefaults: _mappers.resolve.with(_immutable.Map),
            unauthorizedRedirectUrl: _mappers.fields.string,
            homePageComponent: function homePageComponent(value) {
                return value;
            },
            appTree: function appTree(value) {
                return value;
            }
        });
    };

    return Config;
}((0, _immutable.Record)(defaults));

exports.default = Config;
module.exports = exports.default;