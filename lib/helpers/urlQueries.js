'use strict';

exports.__esModule = true;
exports.objectToQueryString = exports.extractSearchQuery = exports.hasSomePaginationQuery = exports.extractPaginationQuery = undefined;

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _defaultConfig = require('../default-config');

var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var extractPaginationQuery = exports.extractPaginationQuery = function extractPaginationQuery(queryString) {
    var queryParams = _qs2.default.parse(queryString.replace('?', ''), { ignoreQueryPrefix: true });
    return _lodash2.default.mapValues(_defaultConfig2.default.paginationDefaults, function (value, key) {
        return parseInt(queryParams[key] || value, 10);
    });
};

var hasSomePaginationQuery = exports.hasSomePaginationQuery = function hasSomePaginationQuery(queryString) {
    var query = _qs2.default.parse(queryString.replace('?', ''), { ignoreQueryPrefix: true });
    return 'page' in query || 'limit' in query;
};

var extractSearchQuery = exports.extractSearchQuery = function extractSearchQuery(queryString) {
    return _qs2.default.parse(queryString.replace('?', ''), { ignoreQueryPrefix: true });
};

var objectToQueryString = exports.objectToQueryString = function objectToQueryString(obj) {
    return _qs2.default.stringify(_lodash2.default.pickBy(obj), _lodash2.default.isString);
};