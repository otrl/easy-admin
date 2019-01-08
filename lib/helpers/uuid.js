'use strict';

exports.__esModule = true;
exports.uuidv4 = uuidv4;
exports.default = getClientUuid;

var _jsCookie = require('js-cookie');

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function uuidv4() {
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
    });
}

function getClientUuid() {
    var uuid = _jsCookie2.default.get(_constants.SessionCookiePath);
    if (!uuid) {
        uuid = uuidv4();
        _jsCookie2.default.set(_constants.SessionCookiePath, uuid, { expires: 365 });
    }
    return uuid;
}