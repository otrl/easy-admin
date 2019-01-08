import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {bindActionCreators} from 'redux';
import {Breadcrumb, Icon, notification, Button, Popconfirm} from 'antd';
import {push} from 'connected-react-router'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {Permissions, Urls} from '../../constants';

import Dictionary from '../../records/Dictionary';
import UserState from '../../records/UserState';
import RolesOptionsState from '../../records/RolesOptionsState';
import RolesOptionsActions from '../../actions/RolesOptionsActions';
import UsersActions from '../../actions/UsersActions';
import ForceLogoutActions from '../../actions/ForceLogoutActions';

import Form from './Form';

class Update extends React.PureComponent {
    static propTypes = {
        dictionary: PropTypes.instanceOf(Dictionary).isRequired,
        rolesOptionsState: PropTypes.instanceOf(RolesOptionsState).isRequired,
        userState: PropTypes.instanceOf(UserState).isRequired,
        fetchUser: PropTypes.func.isRequired,
        logoutUser: PropTypes.func.isRequired,
        updateUser: PropTypes.func.isRequired,
        navigateTo: PropTypes.func.isRequired,
    };


    componentWillMount () {
        this.props.fetchUser(this.props.match.params.id);
        this.props.fetchRolesOptions();
    }

    onSubmit = async (values) => {
        const {updateUser, dictionary, navigateTo, match} = this.props;
        try {
            await updateUser(match.params.id, values);
            notification.success({
                message: dictionary.getByKey("USER_UPDATE_SUCCESS_NOTIFICATION_TITLE"),
                description: dictionary.getByKey("USER_UPDATE_SUCCESS_NOTIFICATION_DESCRIPTION")
            });
            navigateTo(Urls.USERS);
        } catch (err) {
            notification.error({
                message: dictionary.getByKey("USER_UPDATE_API_ERROR_NOTIFICATION_TITLE"),
                description: dictionary.getByKey("USER_UPDATE_API_ERROR_NOTIFICATION_DESCRIPTION")
            });
        }
    };

    handleUserLogout = async () => {
        const {logoutUser, dictionary, match, fetchUser} = this.props;
        try {
            await logoutUser([match.params.id]);
            notification.success({
                message: dictionary.getByKey("USER_LOGOUT_SUCCESS_NOTIFICATION_TITLE"),
                description: dictionary.getByKey("USER_LOGOUT_SUCCESS_NOTIFICATION_DESCRIPTION")
            });
            fetchUser(match.params.id);
        } catch (err) {
            notification.error({
                message: dictionary.getByKey("USER_UPDATE_LOGOUT_ERROR_NOTIFICATION_TITLE"),
                description: dictionary.getByKey("USER_UPDATE_LOGOUT_ERROR_NOTIFICATION_DESCRIPTION")
            });
        }
    };

    render () {
        const {dictionary, rolesOptionsState, userState, user} = this.props;
        return (
            <div className="content-section-inner">
                <Helmet>
                    <title>{dictionary.getByKey("USER_UPDATE_TITLE")}</title>
                </Helmet>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to={Urls.HOME}>
                            <Icon type="home"/>
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to={Urls.USERS}>
                            <Icon type="team"/> {dictionary.getByKey("USERS_LISTING_BREADCRUMB")}
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Icon type="edit"/> {dictionary.getByKey("USER_UPDATE_BREADCRUMB")}
                    </Breadcrumb.Item>
                </Breadcrumb>
                <h2>
                    {dictionary.getByKey("USER_UPDATE_TITLE")}
                    {(!user.hasPermission(Permissions.FORCE_LOGOUT) && userState.user && userState.user.token_count > 0) &&
                        <Button type="dashed" disabled className="pull-right">{dictionary.getByKey("USER_UPDATE_LOGOUT_BUTTON_LOGGED_IN")}</Button>
                    }
                    {(user.hasPermission(Permissions.FORCE_LOGOUT) && userState.user && userState.user.token_count > 0) && <Popconfirm title={dictionary.getByKey("USER_UPDATE_LOGOUT_USER_CONFIRMATION_TITLE")}
                                                                                       okText={dictionary.getByKey("YES")}
                                                                                       cancelText={dictionary.getByKey("NO")}
                                                                                       onConfirm={this.handleUserLogout}>
                        <Button type="danger" icon="logout" className="pull-right">{dictionary.getByKey("USER_UPDATE_LOGOUT_BUTTON_LOGOUT")}</Button>
                    </Popconfirm>}
                </h2>
                <Form dictionary={dictionary}
                      user={userState.user}
                      roles={rolesOptionsState.roles}
                      onSubmit={this.onSubmit}
                      disabled={!user.hasPermission(Permissions.USER_UPDATE)}
                      loading={userState.loading || rolesOptionsState.loading}/>
            </div>
        );
    }
}

const dispatchToProps = (dispatch) => {
    return {
        fetchRolesOptions: bindActionCreators(RolesOptionsActions.getList, dispatch),
        fetchUser: bindActionCreators(UsersActions.get, dispatch),
        updateUser: bindActionCreators(UsersActions.update, dispatch),
        logoutUser: bindActionCreators(ForceLogoutActions.logout, dispatch),
        navigateTo: bindActionCreators(push, dispatch),
    };
};

const getStoresMap = (state) => {
    return {
        user: state.auth.user,
        dictionary: state.dictionary,
        rolesOptionsState: state.rolesOptionsState,
        userState: state.userState,
    };
};

export default connect(getStoresMap, dispatchToProps)(Update);
