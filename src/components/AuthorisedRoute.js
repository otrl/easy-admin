import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';

import User from '../records/User';

export default class PrivateRoute extends React.PureComponent {
    static propTypes = {
        setPathMatch: PropTypes.func.isRequired,
        permission: PropTypes.string.isRequired,
        user: PropTypes.instanceOf(User).isRequired
    };

    componentDidMount () {
        setTimeout(() => this.props.setPathMatch(), 0);
    }

    componentWillReceiveProps (newProps) {
        const {setPathMatch, location} = newProps;
        if (this.props.location.pathname !== location.pathname) {
            setTimeout(() => setPathMatch(), 0);
        }
    }

    render () {
        const {user, permission, component: Component, ...rest} = this.props;
        const isAuthorised = user && user.hasPermission(permission);
        return (
            <Route {...rest}
                   render={
                       props => {
                           if (isAuthorised) {
                               return <Component {...props} />;
                           } else {
                               return <Redirect to="/"/>
                           }
                       }
                   }
            />
        );
    }
}
