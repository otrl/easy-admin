import React from 'react';
import PropTypes from 'prop-types';
import {Layout as ALayout} from 'antd';
import {Switch, Redirect, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Media from 'react-media';
import classnames from 'classnames';

import {Permissions, Urls} from '../../constants';

import UiActions from '../../actions/UiActions';

import UiState from '../../records/UiState';
import User from '../../records/User';
import Dictionary from '../../records/Dictionary';

import MenuSection from './MenuSection';
import HeaderSection from './HeaderSection';
import FooterSection from './FooterSection';

import RolesListingPage from '../roles/Listing';
import RoleCreatePage from '../roles/Create';
import RoleUpdatePage from '../roles/Update';

import UsersListingPage from '../users/Listing';
import UserCreatePage from '../users/Create';
import UserUpdatePage from '../users/Update';

import LogoutPage from '../logout';

import AccountPage from '../account';

import ActionLogPage from '../action-log';

import AuthorisedRoute from '../AuthorisedRoute';

class Layout extends React.PureComponent {
    static propTypes = {
        ui: PropTypes.instanceOf(UiState).isRequired,
        dictionary: PropTypes.instanceOf(Dictionary).isRequired,
        history: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        isMobile: PropTypes.bool.isRequired,
        toggleNav: PropTypes.func.isRequired,
        setPathMatch: PropTypes.func.isRequired,
        user: PropTypes.instanceOf(User),
        homePageComponent: PropTypes.func,
        appTree: PropTypes.array
    };

    setPathMatch = (pathsArray) => () => {
        this.props.setPathMatch(pathsArray);
    };

    render () {
        const {user, isMobile, dictionary, toggleNav, ui, homePageComponent, appTree} = this.props;

        if (!user) {
            return <Redirect to={{
                pathname: Urls.LOGIN,
            }}/>;
        }

        const layoutClasses = classnames({
            "is-mobile": isMobile,
            "nav-collapsed": ui.navCollapsed
        });

        return (
            <ALayout className={layoutClasses}>
                {ui.isLoading() && <div className="page-loader"/>}
                <MenuSection dictionary={dictionary}
                             currentPathMatch={ui.currentPathMatch}
                             collapsed={ui.navCollapsed}
                             isMobile={isMobile}
                             user={user}
                             appTree={appTree}
                             toggleNav={toggleNav}/>
                <ALayout>
                    <HeaderSection isMobile={isMobile}
                                   navCollapsed={ui.navCollapsed}
                                   toggleNav={toggleNav}
                                   user={user}
                                   dictionary={dictionary}/>
                    <ALayout.Content className="content-section">
                        <Switch>
                            <AuthorisedRoute path={Urls.ROLE_VIEW}
                                             user={user}
                                             permission={Permissions.ROLE_VIEW}
                                             setPathMatch={this.setPathMatch([Urls.ROLE_VIEW, Urls.ROLES])}
                                             component={RoleUpdatePage}/>
                            <AuthorisedRoute path={Urls.ROLES}
                                             user={user}
                                             permission={Permissions.ROLES_VIEW}
                                             setPathMatch={this.setPathMatch([Urls.ROLES])}
                                             component={RolesListingPage}/>
                            <AuthorisedRoute path={Urls.ROLES_CREATE}
                                             user={user}
                                             permission={Permissions.ROLES_CREATE}
                                             setPathMatch={this.setPathMatch([Urls.ROLES_CREATE, Urls.ROLES])}
                                             component={RoleCreatePage}/>
                            <AuthorisedRoute path={Urls.USER_VIEW}
                                             user={user}
                                             permission={Permissions.USER_VIEW}
                                             setPathMatch={this.setPathMatch([Urls.USER_VIEW, Urls.USERS])}
                                             component={UserUpdatePage}/>
                            <AuthorisedRoute path={Urls.USERS}
                                             user={user}
                                             permission={Permissions.USERS_VIEW}
                                             setPathMatch={this.setPathMatch([Urls.USERS])}
                                             component={UsersListingPage}/>
                            <AuthorisedRoute path={Urls.USERS_CREATE}
                                             user={user}
                                             permission={Permissions.USERS_CREATE}
                                             setPathMatch={this.setPathMatch([Urls.USERS_CREATE, Urls.USERS])}
                                             component={UserCreatePage}/>
                            <AuthorisedRoute path={Urls.ACCOUNT}
                                             user={user}
                                             permission={Permissions.ACCOUNT_VIEW}
                                             setPathMatch={this.setPathMatch([Urls.ACCOUNT])}
                                             component={AccountPage}/>
                            <AuthorisedRoute path={Urls.ACTION_LOG}
                                             user={user}
                                             permission={Permissions.ACTION_LOG_VIEW}
                                             setPathMatch={this.setPathMatch([Urls.ACTION_LOG])}
                                             component={ActionLogPage}/>
                            {appTree && appTree.map(page => <AuthorisedRoute path={page.path}
                                                                             key={page.path}
                                                                             user={user}
                                                                             permission={page.permission}
                                                                             setPathMatch={this.setPathMatch(page.pathMatches)}
                                                                             component={page.pageComponent}/>)}
                            <Route path={Urls.LOGOUT}
                                   component={LogoutPage}/>
                            <Route path={Urls.HOME}
                                   component={homePageComponent}/>
                        </Switch>
                    </ALayout.Content>
                    <FooterSection dictionary={dictionary}/>
                </ALayout>
            </ALayout>
        );
    }
}

const dispatchToProps = (dispatch) => {
    return {
        toggleNav: bindActionCreators(UiActions.toggleNav, dispatch),
        setPathMatch: bindActionCreators(UiActions.setPathMatch, dispatch),
    };
};

const getStoresMap = (state) => {
    return {
        user: state.auth.user,
        dictionary: state.dictionary,
        homePageComponent: state.config.homePageComponent,
        appTree: state.config.appTree,
        ui: state.ui
    };
};

export default connect(getStoresMap, dispatchToProps)(props => (
    <Media query="(max-width: 599px)">
        {isMobile => <Layout {...props} isMobile={isMobile}/>}
    </Media>
));
