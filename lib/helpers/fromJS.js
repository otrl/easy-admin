'use strict';

exports.__esModule = true;
exports.default = fromJS;

var _immutable = require('immutable');

var _records = require('../records');

var _records2 = _interopRequireDefault(_records);

var _mappers = require('./mappers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fromJS(any) {
    return (0, _immutable.fromJS)(any, function (key, value) {
        try {
            if (_immutable.Iterable.isIndexed(value)) {
                return value.toList();
            } // we're reviving an array -> it's a List
            var map = value.toOrderedMap();
            var MatchingType = _records2.default[map.get('REC_TYPE')]; // check if we know a Record with this type
            // if (MatchingType) console.log(value.toJS(), resolve(value.toJS()).as(MatchingType));
            if (MatchingType) {
                return (0, _mappers.resolve)(value.toJS()).as(MatchingType);
            } // we found a matching Record type -> instantiate it
            // if (MatchingType) return new MatchingType(value); // we found a matching Record type -> instantiate it
            return value.toMap(); // no matching Record type found -> it's a plain old Map
        } catch (err) {
            console.log(err);
        }
    });
}
module.exports = exports.default;