import { Record as record, Map, List } from 'immutable';

import defaultConfig from '../default-config';
import {construct, resolve, resolveAll, fields} from '../helpers/mappers';

const defaults = {
    REC_TYPE: 'Config',
    api: defaultConfig.api,
    gaProperty: defaultConfig.gaProperty,
    paginationDefaults: new Map(defaultConfig.paginationDefaults),
    isHttps: false,
    unauthorizedRedirectUrl: defaultConfig.unauthorizedRedirectUrl
};

export default class Config extends record(defaults) {
    static fromJSON (json = {}) {
        return construct(Config, json, {
            api: fields.string,
            gaProperty: fields.string,
            paginationDefaults: resolve.with(Map),
            isHttps: fields.boolean,
            unauthorizedRedirectUrl: fields.string,
        });
    }
}
