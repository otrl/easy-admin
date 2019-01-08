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
import UsersState from '../../records/UsersState';
import UsersActions from '../../actions/UsersActions';

import IsAuthorised from './../IsAuthorised';

class Listing extends React.PureComponent {
    static propTypes = {
        dictionary: PropTypes.instanceOf(Dictionary).isRequired,
        usersState: PropTypes.instanceOf(UsersState).isRequired,
        fetchUsers: PropTypes.func.isRequired,
        deleteSingle: PropTypes.func.isRequired,
        deleteMultiple: PropTypes.func.isRequired,
    };

    state = {
        idsToDelete: []
    };

    componentWillMount () {
        const {page, limit} = extractPaginationQuery(this.props.location.search);
        this.props.fetchUsers(page, limit);
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.location.search !== this.props.location.search) {
            const { page, limit } = extractPaginationQuery(nextProps.location.search);
            this.props.fetchUsers(page, limit);
        }
    }

    handleTableChange = (pagination) => {
        const {usersState, history} = this.props;
        const newPagination = usersState.pagination.set('page', pagination.current);
        history.push({
            pathname: Urls.MY_TICKETS,
            search: newPagination.toQueryString()
        });
    };

    handleSingleDelete = (id) => async () => {
        const {dictionary, deleteSingle, location, fetchUsers} = this.props;
        try {
            await deleteSingle(id);
            notification.success({
                message: dictionary.getByKey("USERS_LISTING_DELETE_SINGLE_SUCCESS_NOTIFICATION_TITLE"),
                description: dictionary.getByKey("USERS_LISTING_DELETE_SINGLE_SUCCESS_NOTIFICATION_DESCRIPTION")
            });
            const { page, limit } = extractPaginationQuery(location.search);
            fetchUsers(page, limit);
        } catch (err) {
            console.log(err);
            notification.error({
                message: dictionary.getByKey("USERS_LISTING_DELETE_SINGLE_ERROR_NOTIFICATION_TITLE"),
                description: dictionary.getByKey("USERS_LISTING_DELETE_SINGLE_ERROR_NOTIFICATION_DESCRIPTION")
            });
        }
    };

    handleMultipleDelete = async () => {
        const {dictionary, deleteMultiple, location, fetchUsers} = this.props;
        try {
            await deleteMultiple(this.state.idsToDelete);
            notification.success({
                message: dictionary.getByKey("USERS_LISTING_DELETE_MULTIPLE_SUCCESS_NOTIFICATION_TITLE"),
                description: dictionary.getByKey("USERS_LISTING_DELETE_MULTIPLE_SUCCESS_NOTIFICATION_DESCRIPTION")
            });
            const { page, limit } = extractPaginationQuery(location.search);
            fetchUsers(page, limit);
        } catch (err) {
            notification.error({
                message: dictionary.getByKey("USERS_LISTING_DELETE_MULTIPLE_ERROR_NOTIFICATION_TITLE"),
                description: dictionary.getByKey("USERS_LISTING_DELETE_MULTIPLE_ERROR_NOTIFICATION_DESCRIPTION")
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
            title: dictionary.getByKey("USERS_LISTING_TABLE_EMAIL_COL"),
            dataIndex: 'email',
        },{
            title: dictionary.getByKey("USERS_LISTING_TABLE_NAME_COL"),
            dataIndex: 'first_name',
            render: (text, record) => `${record.first_name} ${record.last_name}`,
        }, {
            title: dictionary.getByKey("USERS_LISTING_TABLE_ROLE_COL"),
            dataIndex: 'role',
            render: (role) => role.name,
        }, {
            title: '',
            width: 100,
            dataIndex: 'id',
            render: id => <React.Fragment>
                <Button.Group size="small">
                    <IsAuthorised user={user} permission={Permissions.USER_VIEW}>
                        <Link to={`${Urls.USERS}/${id}`} className="ant-btn ant-btn-default ant-btn-icon-only" tittle={dictionary.getByKey("USERS_LISTING_EDIT_BUTTON")}>
                            <Icon type="edit"/>
                        </Link>
                    </IsAuthorised>
                    <IsAuthorised user={user} permission={Permissions.USER_DELETE}>
                        <Popconfirm title={dictionary.getByKey("USERS_LISTING_DELETE_SINGLE_CONFIRMATION")}
                                    okText={dictionary.getByKey("YES")}
                                    cancelText={dictionary.getByKey("NO")}
                                    onConfirm={this.handleSingleDelete(id)}>
                            <Button type="danger" icon="delete" title={dictionary.getByKey("USERS_LISTING_DELETE_BUTTON")}/>
                        </Popconfirm>
                    </IsAuthorised>
                </Button.Group>
            </React.Fragment>
        }];
    }

    render () {
        const {dictionary, usersState, user} = this.props;
        const pagination = {
            total: usersState.pagination.count,
            current: usersState.pagination.page,
            pageSize: usersState.pagination.limit,
        };

        return (
            <div className="content-section-inner">
                <Helmet>
                    <title>{dictionary.getByKey("USERS_LISTING_TITLE")}</title>
                </Helmet>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to={Urls.HOME}>
                            <Icon type="home"/>
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Icon type="team"/> {dictionary.getByKey("USERS_LISTING_BREADCRUMB")}
                    </Breadcrumb.Item>
                </Breadcrumb>
                <IsAuthorised user={user} permission={Permissions.USERS_CREATE}>
                    <Link to={Urls.USERS_CREATE}>
                        <Button type="primary">
                            <Icon type="plus-circle"/> {dictionary.getByKey("USERS_LISTING_CREATE_BUTTON")}
                        </Button>
                    </Link>&nbsp;
                </IsAuthorised>
                <IsAuthorised user={user} permission={Permissions.USERS_DELETE}>
                    <Popconfirm title={dictionary.getByKey("USERS_LISTING_DELETE_MULTIPLE_CONFIRMATION")}
                                okText={dictionary.getByKey("YES")}
                                cancelText={dictionary.getByKey("NO")}
                                onConfirm={this.handleMultipleDelete}>
                        <Button type="danger">
                            <Icon type="delete"/> {dictionary.getByKey("USERS_LISTING_DELETE_MULTIPLE_BUTTON")}
                        </Button>
                    </Popconfirm>
                </IsAuthorised>
                <br/><br/>
                <Table size="small"
                       rowSelection={this.getTableRowConfig()}
                       rowKey="id"
                       columns={this.getTableColConfig()}
                       pagination={pagination}
                       loading={usersState.loading}
                       onChange={this.handleTableChange}
                       dataSource={usersState.users.toJS()}/>

            </div>
        );
    }
}

const dispatchToProps = (dispatch) => {
    return {
        fetchUsers: bindActionCreators(UsersActions.getList, dispatch),
        deleteSingle: bindActionCreators(UsersActions.delete, dispatch),
        deleteMultiple: bindActionCreators(UsersActions.deleteList, dispatch),
    };
};

const getStoresMap = (state) => {
    return {
        user: state.auth.user,
        dictionary: state.dictionary,
        usersState: state.usersState,
    };
};

export default connect(getStoresMap, dispatchToProps)(Listing);
