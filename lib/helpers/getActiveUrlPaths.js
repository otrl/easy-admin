'use strict';

exports.__esModule = true;
exports.default = getActiveUrlPaths;

var _constants = require('./../constants');

function getActiveUrlPaths(urlPattern) {
    var array = [urlPattern];
    if (_constants.UrlsParentage[urlPattern]) {
        return array.concat(_constants.UrlsParentage[urlPattern]);
    }
    return array;
}
module.exports = exports.default;