import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import AuthActions from '../../actions/AuthActions';
import {Urls, ApiExceptions} from '../../constants';

import User from '../../records/User';

class Logout extends React.PureComponent {
    static propTypes = {
        logout: PropTypes.func.isRequired,
        user: PropTypes.instanceOf(User),
    };

    static defaultProps = {
        user: null
    };

    componentWillMount () {
        const {user, logout} = this.props;
        logout(user);
    }

    render () {
        return <Redirect push to={Urls.LOGIN}/>;
    }
}

const dispatchToProps = (dispatch) => {
    return {
        logout: bindActionCreators(AuthActions.logout, dispatch),
    };
};

const getStoresMap = (state) => {
    return {
        user: state.auth.user,
    };
};

export default connect(getStoresMap, dispatchToProps)(Logout)
