'use strict';

exports.__esModule = true;

var _eventsMap;

var _reduxBeacon = require('redux-beacon');

var _connectedReactRouter = require('connected-react-router');

var _googleTagManager = require('@redux-beacon/google-tag-manager');

var _googleTagManager2 = _interopRequireDefault(_googleTagManager);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var eventsMap = (_eventsMap = {}, _eventsMap[_connectedReactRouter.LOCATION_CHANGE] = function (action) {
    return {
        event: 'pageview',
        page: action.payload.pathname
    };
}, _eventsMap);

var gtm = (0, _googleTagManager2.default)();
exports.default = (0, _reduxBeacon.createMiddleware)(eventsMap, gtm);
module.exports = exports.default;