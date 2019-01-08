'use strict';

exports.__esModule = true;
exports.fields = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.resolve = resolve;
exports.construct = construct;
exports.resolveAll = resolveAll;

var _immutable = require('immutable');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _momentTimezone = require('moment-timezone');

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function resolve(value) {
    return {
        as: function as(record) {
            return _lodash2.default.isNil(value) ? value : record.fromJSON(value);
        },
        with: function _with(fn) {
            return _lodash2.default.isNil(value) ? value : fn(value);
        }
    };
}

function construct(Type) {
    var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var schema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var resolved = (0, _keys2.default)(schema).reduce(function (reduction, key) {
        var factory = schema[key];
        if (typeof factory === 'function') {
            reduction[key] = factory(values[key]);
        } else {
            reduction[key] = factory;
        }
        return reduction;
    }, {});
    return new Type(resolved);
}

resolve.as = function (Type) {
    return function (value) {
        return resolve(value).as(Type);
    };
};

resolve.with = function (func) {
    return function (value) {
        return resolve(value).with(func);
    };
};

function resolveAll(keys) {
    var list = new _immutable.List(keys);
    var resolved = list.map(function (key) {
        return resolve(key);
    });

    return {
        as: function as(Type) {
            return resolved.map(function (item) {
                return item.as(Type);
            });
        },
        with: function _with(func) {
            return resolved.map(function (item) {
                return item.with(func);
            });
        }
    };
}

resolveAll.as = function (Type) {
    return function (value) {
        return resolveAll(value).as(Type);
    };
};

resolveAll.with = function (func) {
    return function (value) {
        return resolveAll(value).with(func);
    };
};

var fields = exports.fields = {
    string: resolve.with(String),
    bool: resolve.with(Boolean),
    boolean: resolve.with(Boolean),
    number: resolve.with(Number),
    datetime: resolve.with(_momentTimezone2.default)
};