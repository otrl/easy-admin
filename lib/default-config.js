'use strict';

exports.__esModule = true;
exports.defaultConfigShape = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultConfigShape = exports.defaultConfigShape = {
    api: _propTypes2.default.string,
    gaProperty: _propTypes2.default.string,
    unauthorizedRedirectUrl: _propTypes2.default.string
};

exports.default = {
    api: 'http://localhost:3000/api/',
    gaProperty: '',
    paginationDefaults: {
        page: 1,
        limit: 20
    },
    unauthorizedRedirectUrl: _constants.Urls.HOME
};