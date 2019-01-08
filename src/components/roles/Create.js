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
import RolesActions from '../../actions/RolesActions';

import Form from './Form';

class Create extends React.PureComponent {
    static propTypes = {
        dictionary: PropTypes.instanceOf(Dictionary).isRequired,
        createRole: PropTypes.func.isRequired,
        navigateTo: PropTypes.func.isRequired,
    };

    state = {
        loading: false,
    };

    onSubmit = async (values) => {
        const {createRole, dictionary, navigateTo} = this.props;
        try {
            this.setState({loading: true});
            await createRole(values);
            notification.success({
                message: dictionary.getByKey("ROLE_CREATE_SUCCESS_NOTIFICATION_TITLE"),
                description: dictionary.getByKey("ROLE_CREATE_SUCCESS_NOTIFICATION_DESCRIPTION")
            });
            navigateTo(Urls.ROLES)
        } catch (err) {
            this.setState({loading: false});
            notification.error({
                message: dictionary.getByKey("ROLE_CREATE_API_ERROR_NOTIFICATION_TITLE"),
                description: dictionary.getByKey("ROLE_CREATE_API_ERROR_NOTIFICATION_DESCRIPTION")
            });
        }
    };

    render () {
        const {dictionary} = this.props;

        return (
            <div className="content-section-inner">
                <Helmet>
                    <title>{dictionary.getByKey("ROLE_CREATE_TITLE")}</title>
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
                        <Icon type="usergroup-add"/> {dictionary.getByKey("ROLE_CREATE_BREADCRUMB")}
                    </Breadcrumb.Item>
                </Breadcrumb>
                <h2>{dictionary.getByKey("ROLE_CREATE_TITLE")}</h2>
                <Form dictionary={dictionary} onSubmit={this.onSubmit} loading={this.state.loading}/>
            </div>
        );
    }
}

const dispatchToProps = (dispatch) => {
    return {
        createRole: bindActionCreators(RolesActions.create, dispatch),
        navigateTo: bindActionCreators(push, dispatch),
    };
};

const getStoresMap = (state) => {
    return {
        dictionary: state.dictionary,
    };
};

export default connect(getStoresMap, dispatchToProps)(Create);
