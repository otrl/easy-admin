import PropTypes from 'prop-types';

import {Urls} from './constants';

export const defaultConfigShape = {
    api: PropTypes.string,
    gaProperty: PropTypes.string,
    unauthorizedRedirectUrl: PropTypes.string,
};

export default {
    api: 'http://localhost:3000/api/',
    gaProperty: '',
    paginationDefaults: {
        page: 1,
        limit: 20
    },
    unauthorizedRedirectUrl: Urls.HOME
};
