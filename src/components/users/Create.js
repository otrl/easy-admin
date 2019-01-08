import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {bindActionCreators} from 'redux';
import {Breadcrumb, Icon, notification} from 'antd';
import {push} from 'connected-react-router'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {Urls} from '../../constants';

import Dictionary from '../../records/Dictionary';
import RolesOptionsState from '../../records/RolesOptionsState';
import UsersActions from '../../actions/UsersActions';
import RolesOptionsActions from '../../actions/RolesOptionsActions';

import Form from './Form';

class Create extends React.PureComponent {
    static propTypes = {
        rolesOptionsState: PropTypes.instanceOf(RolesOptionsState).isRequired,
        dictionary: PropTypes.instanceOf(Dictionary).isRequired,
        fetchRolesOptions: PropTypes.func.isRequired,
        createUser: PropTypes.func.isRequired,
        navigateTo: PropTypes.func.isRequired,
    };

    state = {
        loading: false,
    };

    componentWillMount() {
        this.props.fetchRolesOptions();
    }

    onSubmit = async (values) => {
        const {createUser, dictionary, navigateTo} = this.props;
        try {
            this.setState({loading: true});
            await createUser(values);
            notification.success({
                message: dictionary.getByKey("USER_CREATE_SUCCESS_NOTIFICATION_TITLE"),
                description: dictionary.getByKey("USER_CREATE_SUCCESS_NOTIFICATION_DESCRIPTION")
            });
            navigateTo(Urls.USERS)
        } catch (err) {
            this.setState({loading: false});
            notification.error({
                message: dictionary.getByKey("USER_CREATE_API_ERROR_NOTIFICATION_TITLE"),
                description: dictionary.getByKey("USER_CREATE_API_ERROR_NOTIFICATION_DESCRIPTION")
            });
        }
    };

    render() {
        const {dictionary, rolesOptionsState} = this.props;

        return (
            <div className="content-section-inner">
                <Helmet>
                    <title>{dictionary.getByKey("USER_CREATE_TITLE")}</title>
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
                        <Icon type="usergroup-add"/> {dictionary.getByKey("USER_CREATE_BREADCRUMB")}
                    </Breadcrumb.Item>
                </Breadcrumb>
                <h2>{dictionary.getByKey("USER_CREATE_TITLE")}</h2>
                <Form dictionary={dictionary}
                      onSubmit={this.onSubmit}
                      roles={rolesOptionsState.roles}
                      loading={this.state.loading || rolesOptionsState.loading}/>
            </div>
        );
    }
}

const dispatchToProps = (dispatch) => {
    return {
        fetchRolesOptions: bindActionCreators(RolesOptionsActions.getList, dispatch),
        createUser: bindActionCreators(UsersActions.create, dispatch),
        navigateTo: bindActionCreators(push, dispatch),
    };
};

const getStoresMap = (state) => {
    return {
        dictionary: state.dictionary,
        rolesOptionsState: state.rolesOptionsState,
    };
};

export default connect(getStoresMap, dispatchToProps)(Create);
