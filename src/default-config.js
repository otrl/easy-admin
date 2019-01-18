import PropTypes from 'prop-types';

import {Urls} from './constants';

import Home from './components/home';

export const defaultConfigShape = {
    api: PropTypes.string,
    gaProperty: PropTypes.string,
    unauthorizedRedirectUrl: PropTypes.string,
    paginationDefaults: PropTypes.shape({
        page: PropTypes.number,
        limit: PropTypes.number,
    }),
    language: PropTypes.object,
    homePageComponent: PropTypes.func,
    appTree: PropTypes.arrayOf(PropTypes.shape({
        navString: PropTypes.string,
        navIcon: PropTypes.string,
        permission: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        pathMatches: PropTypes.arrayOf(PropTypes.string),
        pageComponent: PropTypes.func.isRequired,
        children: PropTypes.arrayOf(PropTypes.shape({
            navString: PropTypes.string,
            navIcon: PropTypes.string,
            path: PropTypes.string.isRequired,
            pathMatches: PropTypes.arrayOf(PropTypes.string),
            permission: PropTypes.string.isRequired,
            pageComponent: PropTypes.func.isRequired,
        }))
    }))
};

export default {
    api: 'http://localhost:3000/api/',
    gaProperty: '',
    paginationDefaults: {
        page: 1,
        limit: 20
    },
    unauthorizedRedirectUrl: Urls.HOME,
    homePageComponent: Home,
};
