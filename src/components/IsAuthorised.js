import React from 'react';
import PropTypes from 'prop-types';
import User from '../records/User';

export default function IsAuthorised({user, permission, children}) {
    if (user.hasPermission(permission)) {
        return children;
    }

    return null;
}

IsAuthorised.propTypes = {
    user: PropTypes.instanceOf(User).isRequired,
    permission: PropTypes.string.isRequired,
    children: PropTypes.node,
};

IsAuthorised.defaultProps = {
    children: null,
};
