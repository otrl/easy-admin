import {Record as record, Set, List} from 'immutable';

import { construct, resolve } from '../helpers/mappers';


const defaults = {
    REC_TYPE: 'UiState',
    loading: new Set(),
    navCollapsed: false,
    currentPathMatch: new List(),
};

class UiState extends record(defaults) {
    static fromJSON (json = {}) {
        return construct(UiState, json, {
            loading: resolve.with(Set),
            navCollapsed: resolve.as(Boolean),
            currentPathMatch: resolveAll.as(String)
        });
    }

    isLoading () {
        return this.loading.size > 0;
    }

    addToLoading (id) {
        return this.set('loading', this.loading.add(id));
    }

    removeFromLoading (id) {
        return this.set('loading', this.loading.delete(id));
    }

    clearLoading () {
        return this.set('loading', new Set());
    }
}

export default UiState;
