import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {bindActionCreators} from 'redux';
import {Breadcrumb, Icon, Table, Button, Popconfirm, notification} from 'antd';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {extractPaginationQuery} from '../../helpers/urlQueries';
import {Permissions, Urls} from '../../constants';

import Dictionary from '../../records/Dictionary';
import RolesState from '../../records/RolesState';
import RolesActions from '../../actions/RolesActions';

import IsAuthorised from './../IsAuthorised';

class Listing extends React.PureComponent {
    static propTypes = {
        dictionary: PropTypes.instanceOf(Dictionary).isRequired,
        rolesState: PropTypes.instanceOf(RolesState).isRequired,
        fetchRoles: PropTypes.func.isRequired,
        deleteSingle: PropTypes.func.isRequired,
        deleteMultiple: PropTypes.func.isRequired,
    };

    state = {
        idsToDelete: []
    };

    componentWillMount () {
        const {page, limit} = extractPaginationQuery(this.props.location.search);
        this.props.fetchRoles(page, limit);
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.location.search !== this.props.location.search) {
            const { page, limit } = extractPaginationQuery(nextProps.location.search);
            this.props.fetchRoles(page, limit);
        }
    }

    handleTableChange = (pagination) => {
        const {rolesState, history} = this.props;
        const newPagination = rolesState.pagination.set('page', pagination.current);
        history.push({
            pathname: Urls.MY_TICKETS,
            search: newPagination.toQueryString()
        });
    };

    handleSingleDelete = (id) => async () => {
        const {dictionary, deleteSingle, location, fetchRoles} = this.props;
        try {
            await deleteSingle(id);
            notification.success({
                message: dictionary.getByKey("ROLES_LISTING_DELETE_SINGLE_SUCCESS_NOTIFICATION_TITLE"),
                description: dictionary.getByKey("ROLES_LISTING_DELETE_SINGLE_SUCCESS_NOTIFICATION_DESCRIPTION")
            });
            const { page, limit } = extractPaginationQuery(location.search);
            fetchRoles(page, limit);
        } catch (err) {
            console.log(err);
            notification.error({
                message: dictionary.getByKey("ROLES_LISTING_DELETE_SINGLE_ERROR_NOTIFICATION_TITLE"),
                description: dictionary.getByKey("ROLES_LISTING_DELETE_SINGLE_ERROR_NOTIFICATION_DESCRIPTION")
            });
        }
    };

    handleMultipleDelete = async () => {
        const {dictionary, deleteMultiple, location, fetchRoles} = this.props;
        try {
            await deleteMultiple(this.state.idsToDelete);
            notification.success({
                message: dictionary.getByKey("ROLES_LISTING_DELETE_MULTIPLE_SUCCESS_NOTIFICATION_TITLE"),
                description: dictionary.getByKey("ROLES_LISTING_DELETE_MULTIPLE_SUCCESS_NOTIFICATION_DESCRIPTION")
            });
            const { page, limit } = extractPaginationQuery(location.search);
            fetchRoles(page, limit);
        } catch (err) {
            notification.error({
                message: dictionary.getByKey("ROLES_LISTING_DELETE_MULTIPLE_ERROR_NOTIFICATION_TITLE"),
                description: dictionary.getByKey("ROLES_LISTING_DELETE_MULTIPLE_ERROR_NOTIFICATION_DESCRIPTION")
            });
        }
    };

    getTableRowConfig () {
        return {
            onChange: (selectedRowKeys) => {
                this.setState({
                    idsToDelete: selectedRowKeys
                });
            },
        }
    }

    getTableColConfig () {
        const {dictionary, user} = this.props;

        return [{
            title: dictionary.getByKey("ROLES_LISTING_TABLE_NAME_COL"),
            dataIndex: 'name',
        }, {
            title: dictionary.getByKey("ROLES_LISTING_TABLE_DESCRIPTION_COL"),
            dataIndex: 'description',
        }, {
            title: '',
            width: 100,
            dataIndex: 'id',
            render: id => <React.Fragment>
                <Button.Group size="small">
                    <IsAuthorised user={user} permission={Permissions.ROLE_VIEW}>
                        <Link to={`${Urls.ROLES}/${id}`} className="ant-btn ant-btn-default ant-btn-icon-only" tittle={dictionary.getByKey("ROLES_LISTING_EDIT_BUTTON")}>
                            <Icon type="edit"/>
                        </Link>
                    </IsAuthorised>
                    <IsAuthorised user={user} permission={Permissions.ROLE_DELETE}>
                        <Popconfirm title={dictionary.getByKey("ROLES_LISTING_DELETE_SINGLE_CONFIRMATION")}
                                    okText={dictionary.getByKey("YES")}
                                    cancelText={dictionary.getByKey("NO")}
                                    onConfirm={this.handleSingleDelete(id)}>
                            <Button type="danger" icon="delete" title={dictionary.getByKey("ROLES_LISTING_DELETE_BUTTON")}/>
                        </Popconfirm>
                    </IsAuthorised>
                </Button.Group>
            </React.Fragment>
        }];
    }

    render () {
        const {dictionary, rolesState, user} = this.props;

        const pagination = {
            total: rolesState.pagination.count,
            current: rolesState.pagination.page,
            pageSize: rolesState.pagination.limit,
        };

        return (
            <div className="content-section-inner">
                <Helmet>
                    <title>{dictionary.getByKey("ROLES_LISTING_TITLE")}</title>
                </Helmet>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to={Urls.HOME}>
                            <Icon type="home"/>
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Icon type="team"/> {dictionary.getByKey("ROLES_LISTING_BREADCRUMB")}
                    </Breadcrumb.Item>
                </Breadcrumb>
                <IsAuthorised user={user} permission={Permissions.ROLES_CREATE}>
                    <Link to={Urls.ROLES_CREATE}>
                        <Button type="primary">
                            <Icon type="plus-circle"/> {dictionary.getByKey("ROLES_LISTING_CREATE_BUTTON")}
                        </Button>
                    </Link>&nbsp;
                </IsAuthorised>
                <IsAuthorised user={user} permission={Permissions.ROLES_DELETE}>
                    <Popconfirm title={dictionary.getByKey("ROLES_LISTING_DELETE_MULTIPLE_CONFIRMATION")}
                                okText={dictionary.getByKey("YES")}
                                cancelText={dictionary.getByKey("NO")}
                                onConfirm={this.handleMultipleDelete}>
                        <Button type="danger">
                            <Icon type="delete"/> {dictionary.getByKey("ROLES_LISTING_DELETE_MULTIPLE_BUTTON")}
                        </Button>
                    </Popconfirm>
                </IsAuthorised>
                <br/><br/>
                <Table size="small"
                       rowSelection={this.getTableRowConfig()}
                       rowKey="id"
                       columns={this.getTableColConfig()}
                       pagination={pagination}
                       loading={rolesState.loading}
                       onChange={this.handleTableChange}
                       dataSource={rolesState.roles.toJS()}/>

            </div>
        );
    }
}

const dispatchToProps = (dispatch) => {
    return {
        fetchRoles: bindActionCreators(RolesActions.getList, dispatch),
        deleteSingle: bindActionCreators(RolesActions.delete, dispatch),
        deleteMultiple: bindActionCreators(RolesActions.deleteList, dispatch),
    };
};

const getStoresMap = (state) => {
    return {
        user: state.auth.user,
        dictionary: state.dictionary,
        rolesState: state.rolesState,
    };
};

export default connect(getStoresMap, dispatchToProps)(Listing);
