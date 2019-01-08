'use strict';

exports.__esModule = true;
exports.formatPrice = formatPrice;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function formatPrice(price) {
    if (!price) {
        return '0.00';
    }
    var priceInPence = price * 100;
    var priceString = priceInPence.toString();
    var decimalPos = priceString.length - 2;
    var pounds = priceString.slice(0, decimalPos);
    if (!pounds) {
        pounds = '0';
    }
    var pence = _lodash2.default.padEnd(priceString.slice(decimalPos), 2);
    return pounds + '.' + pence;
}