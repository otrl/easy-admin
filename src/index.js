import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Route, Switch} from 'react-router-dom';
import moment from 'moment-timezone';
import {ConnectedRouter} from 'connected-react-router'

moment.tz.setDefault('Europe/London');
moment.relativeTimeThreshold('m', 59);

import {store, persistor, history, injectAsyncReducers} from './store';
import {Urls} from './constants';

import StoreInitialiser from './components/StoreInitialiser';

import LoginPage from './components/login';
import PasswordResetRequestPage from './components/pasword-reset-request';
import PasswordResetPage from './components/pasword-reset';
import Layout from './components/layout/Layout';



import defaultConfig, {defaultConfigShape} from './default-config';

class Index extends React.Component {
    static propTypes = {
        config: PropTypes.shape(defaultConfigShape)
    };

    static defaultProps = {
        config: defaultConfig
    };

    componentWillMount () {
        injectAsyncReducers(this.props.config.reducers)
    }

    render () {
        return (
            <Provider store={store}>
                <PersistGate loading={<p>Loading....</p>} persistor={persistor}>
                    <StoreInitialiser store={store} config={this.props.config}>
                        <ConnectedRouter history={history}>
                            <Switch>
                                <Route path={Urls.LOGIN} component={LoginPage}/>
                                <Route path={Urls.REQUEST_PASSWORD_RESET} component={PasswordResetRequestPage}/>
                                <Route path={Urls.RESET_PASSWORD} component={PasswordResetPage}/>
                                <Route path="/" component={Layout}/>
                            </Switch>
                        </ConnectedRouter>
                    </StoreInitialiser>
                </PersistGate>
            </Provider>
        );
    }
}

export default Index;
