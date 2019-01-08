import {List} from 'immutable';
import _ from 'lodash';
import moment from 'moment-timezone';

export function resolve (value) {
    return {
        as: (record) => _.isNil(value) ? value : record.fromJSON(value),
        with: (fn) => _.isNil(value) ? value : fn(value)
    };
}

export function construct (Type, values = {}, schema = {}) {
    const resolved = Object.keys(schema).reduce((reduction, key) => {
        const factory = schema[key];
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
    return function (value) { return resolve(value).as(Type); };
};

resolve.with = function (func) {
    return function (value) { return resolve(value).with(func); };
};

export function resolveAll (keys) {
    const list = new List(keys);
    const resolved = list.map((key) => resolve(key));

    return {
        as: (Type) => resolved.map((item) => item.as(Type)),
        with: (func) => resolved.map((item) => item.with(func))
    };
}

resolveAll.as = function (Type) {
    return function (value) { return resolveAll(value).as(Type); };
};

resolveAll.with = function (func) {
    return function (value) { return resolveAll(value).with(func); };
};

export const fields = {
    string: resolve.with(String),
    bool: resolve.with(Boolean),
    boolean: resolve.with(Boolean),
    number: resolve.with(Number),
    datetime: resolve.with(moment)
};

