import { Record as record, Map, List } from 'immutable';

import defaultConfig from '../default-config';
import {construct, resolve, resolveAll, fields} from '../helpers/mappers';

const defaults = {
    REC_TYPE: 'Config',
    api: defaultConfig.api,
    gaProperty: defaultConfig.gaProperty,
    paginationDefaults: new Map(defaultConfig.paginationDefaults),
    unauthorizedRedirectUrl: defaultConfig.unauthorizedRedirectUrl,
    homePageComponent: defaultConfig.homePageComponent,
    appTree: defaultConfig.appTree
};

export default class Config extends record(defaults) {
    static fromJSON (json = {}) {
        return construct(Config, json, {
            api: fields.string,
            gaProperty: fields.string,
            paginationDefaults: resolve.with(Map),
            unauthorizedRedirectUrl: fields.string,
            homePageComponent: (value) => value,
            appTree: (value) => value
        });
    }
}
