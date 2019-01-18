'use strict';

exports.__esModule = true;
exports.defaultConfigShape = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = require('./constants');

var _home = require('./components/home');

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultConfigShape = exports.defaultConfigShape = {
    api: _propTypes2.default.string,
    gaProperty: _propTypes2.default.string,
    unauthorizedRedirectUrl: _propTypes2.default.string,
    paginationDefaults: _propTypes2.default.shape({
        page: _propTypes2.default.number,
        limit: _propTypes2.default.number
    }),
    language: _propTypes2.default.object,
    homePageComponent: _propTypes2.default.func,
    appTree: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        navString: _propTypes2.default.string,
        navIcon: _propTypes2.default.string,
        permission: _propTypes2.default.string.isRequired,
        path: _propTypes2.default.string.isRequired,
        pathMatches: _propTypes2.default.arrayOf(_propTypes2.default.string),
        pageComponent: _propTypes2.default.func.isRequired,
        children: _propTypes2.default.arrayOf(_propTypes2.default.shape({
            navString: _propTypes2.default.string,
            navIcon: _propTypes2.default.string,
            path: _propTypes2.default.string.isRequired,
            pathMatches: _propTypes2.default.arrayOf(_propTypes2.default.string),
            permission: _propTypes2.default.string.isRequired,
            pageComponent: _propTypes2.default.func.isRequired
        }))
    }))
};

exports.default = {
    api: 'http://localhost:3000/api/',
    gaProperty: '',
    paginationDefaults: {
        page: 1,
        limit: 20
    },
    unauthorizedRedirectUrl: _constants.Urls.HOME,
    homePageComponent: _home2.default
};