import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {bindActionCreators} from 'redux';
import {Breadcrumb, Icon, notification} from 'antd';
import {push} from 'connected-react-router'
import {connect} from 'react-redux';

import {Link} from 'react-router-dom';

import {Permissions, Urls} from '../../constants';

import Dictionary from '../../records/Dictionary';
import RoleState from '../../records/RoleState';
import RolesActions from '../../actions/RolesActions';

import Form from './Form';

class Update extends React.PureComponent {
    static propTypes = {
        dictionary: PropTypes.instanceOf(Dictionary).isRequired,
        roleState: PropTypes.instanceOf(RoleState).isRequired,
        fetchRole: PropTypes.func.isRequired,
        updateRole: PropTypes.func.isRequired,
        navigateTo: PropTypes.func.isRequired,
    };


    componentWillMount () {
        this.props.fetchRole(this.props.match.params.id);
    }

    onSubmit = async (values) => {
        const {updateRole, dictionary, navigateTo, match} = this.props;
        try {
            await updateRole(match.params.id, values);
            notification.success({
                message: dictionary.getByKey("ROLE_UPDATE_SUCCESS_NOTIFICATION_TITLE"),
                description: dictionary.getByKey("ROLE_UPDATE_SUCCESS_NOTIFICATION_DESCRIPTION")
            });
            navigateTo(Urls.ROLES)
        } catch (err) {
            notification.error({
                message: dictionary.getByKey("ROLE_UPDATE_API_ERROR_NOTIFICATION_TITLE"),
                description: dictionary.getByKey("ROLE_UPDATE_API_ERROR_NOTIFICATION_DESCRIPTION")
            });
        }
    };

    render () {
        const {dictionary, roleState, user} = this.props;

        return (
            <div className="content-section-inner">
                <Helmet>
                    <title>{dictionary.getByKey("ROLE_UPDATE_TITLE")}</title>
                </Helmet>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to={Urls.HOME}>
                            <Icon type="home"/>
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to={Urls.ROLES}>
                            <Icon type="team"/> {dictionary.getByKey("ROLES_LISTING_BREADCRUMB")}
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Icon type="edit"/> {dictionary.getByKey("ROLE_UPDATE_BREADCRUMB")}
                    </Breadcrumb.Item>
                </Breadcrumb>
                <h2>{dictionary.getByKey("ROLE_UPDATE_TITLE")}</h2>
                <Form dictionary={dictionary}
                      role={roleState.role}
                      onSubmit={this.onSubmit}
                      disabled={!user.hasPermission(Permissions.ROLE_UPDATE)}
                      loading={roleState.loading}/>
            </div>
        );
    }
}

const dispatchToProps = (dispatch) => {
    return {
        fetchRole: bindActionCreators(RolesActions.get, dispatch),
        updateRole: bindActionCreators(RolesActions.update, dispatch),
        navigateTo: bindActionCreators(push, dispatch),
    };
};

const getStoresMap = (state) => {
    return {
        user: state.auth.user,
        dictionary: state.dictionary,
        roleState: state.roleState,
    };
};

export default connect(getStoresMap, dispatchToProps)(Update);
