import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import moment from 'moment';
import {bindActionCreators} from 'redux';

import ConfigActions from '../actions/ConfigActions';
import AuthActions from '../actions/AuthActions';

import AuthState from '../records/AuthState';
import Session from "../records/Session";

class StoreInitialiser extends React.PureComponent{
    static propTypes = {
        config: PropTypes.any.isRequired,
        auth: PropTypes.instanceOf(AuthState).isRequired,
        session: PropTypes.instanceOf(Session).isRequired,
        logout: PropTypes.func.isRequired,
        children: PropTypes.node
    };

    static defaultProps = {
        children: null
    };

    timer = null;

    componentWillMount () {
        const {setConfig, config} = this.props;
        setConfig(config);
    }

    componentDidMount() {
        if (this.props.auth.user) {
            this.setTimer();
        }
    }

    componentWillReceiveProps (newProps) {
        if (!this.props.auth.user && newProps.auth.user) {
            this.setTimer();
        } else if (this.props.auth.user && !newProps.auth.user) {
            clearInterval(this.timer);
        }
    }

    setTimer () {
        this.timer = setInterval(() => {
            const {auth, logout, session} = this.props;
            if (moment().isAfter(session.sessionExpiry)) {
                clearInterval(this.timer);
                logout(auth.user);
            }
        }, 1000);
    }

    render () {
        return <React.Fragment>{this.props.children}</React.Fragment>;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: bindActionCreators(AuthActions.logout, dispatch),
        setConfig: bindActionCreators(ConfigActions.setConfig, dispatch),
    };
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        session: state.session
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreInitialiser);
