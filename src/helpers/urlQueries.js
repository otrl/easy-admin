import qs from 'qs';
import _ from 'lodash';
import config from '../default-config';

export const extractPaginationQuery = queryString => {
    const queryParams = qs.parse(queryString.replace('?', ''), { ignoreQueryPrefix: true });
    return _.mapValues(config.paginationDefaults, (value, key) => parseInt(queryParams[key] || value, 10));
};

export const hasSomePaginationQuery = queryString => {
    const query = qs.parse(queryString.replace('?', ''), { ignoreQueryPrefix: true });
    return 'page' in query || 'limit' in query;
};

export const extractSearchQuery = queryString => {
    return qs.parse(queryString.replace('?', ''), { ignoreQueryPrefix: true });
};

export const objectToQueryString = obj => {
    return qs.stringify(_.pickBy(obj), _.isString);
};
