import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {bindActionCreators} from 'redux';
import {Breadcrumb, Icon, Table} from 'antd';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import _ from 'lodash';

import {Permissions, Urls} from '../../constants';

import Dictionary from '../../records/Dictionary';
import ActionLogSearch from '../../records/ActionLogSearch';
import ActionLogState from '../../records/ActionLogState';
import UsersOptionsState from '../../records/UsersOptionsState';
import ActionLogActions from '../../actions/ActionLogActions';
import UsersOptionsActions from '../../actions/UsersOptionsActions';

import SearchForm from './SearchForm'
import {extractSearchQuery} from '../../helpers/urlQueries';

class ActionLog extends React.PureComponent {
    static propTypes = {
        dictionary: PropTypes.instanceOf(Dictionary).isRequired,
        usersOptionsState: PropTypes.instanceOf(UsersOptionsState).isRequired,
        actionLogState: PropTypes.instanceOf(ActionLogState).isRequired,
        fetchUsers: PropTypes.func.isRequired,
        fetchActionLog: PropTypes.func.isRequired,
    };


    componentWillMount () {
        const params = extractSearchQuery(this.props.location.search);
        const search = ActionLogSearch.fromJSON(params);
        this.props.fetchActionLog(search);
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.location.search !== this.props.location.search) {
            const params = extractSearchQuery(nextProps.location.search);
            const search = ActionLogSearch.fromJSON(params);
            this.props.fetchActionLog(search);
        }
    }

    onUserSelectType = (searchString) => {
        if (searchString.length >= 3) {
            this.props.fetchUsers(searchString);
        }
    };

    onSearchSubmit = ({range, userId, action, resourceType}) => {
        const {actionLogState, history} = this.props;
        const newSearch = actionLogState.search.merge({
            fromDate: range[0],
            toDate: range[1],
            userId,
            action,
            resourceType,
            page: 1,
        });
        history.push({
            pathname: Urls.ACTION_LOG,
            search: newSearch.toQueryString()
        });
    };

    onPageChange = (pagination) => {
        const {actionLogState, history} = this.props;
        const newSearch = actionLogState.search.set('page', pagination.current);
        history.push({
            pathname: Urls.ACTION_LOG,
            search: newSearch.toQueryString()
        });
    };

    render () {
        const {dictionary, user, actionLogState, usersOptionsState} = this.props;

        const tableColumns = [{
            title: 'Event',
            dataIndex: 'id',
            key: 'id',
            render: (text, record) => {
                let msg = `LOGGED_ACTION_${record.action}`;
                if (record.resource_type) {
                    msg = `${msg}_${record.resource_type}`;
                }

                return user.hasPermission(Permissions.USER_VIEW)
                    ? <Link to={`${Urls.USERS}/${record.user_id}`}>{dictionary.getByKey(msg, {
                        name: record.user_name,
                        date: record.created_at.format("h:mm DD/MM/YY"),
                        id: record.resource_identifier,
                    })}</Link>
                    : dictionary.getByKey(msg, {
                        name: record.user_name,
                        date: record.created_at.format("h:mm DD/MM/YY"),
                        id: record.resource_identifier,
                    });
            }
        },];

        const pagination = {
            total: actionLogState.count,
            current: actionLogState.search.page,
            pageSize: actionLogState.search.limit,
        };

        return (
            <div className="content-section-inner">
                <Helmet>
                    <title>{dictionary.getByKey("ACTION_LOG_TITLE")}</title>
                </Helmet>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to={Urls.HOME}>
                            <Icon type="home"/>
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Icon type="edit"/> {dictionary.getByKey("ACTION_LOG_BREADCRUMB")}
                    </Breadcrumb.Item>
                </Breadcrumb>
                <h2>{dictionary.getByKey("ACTION_LOG_TITLE")}</h2>
                <SearchForm dictionary={dictionary}
                            usersOptionsState={usersOptionsState}
                            onUserSelectType={_.debounce(this.onUserSelectType, 300)}
                            search={actionLogState.search}
                            onSubmit={this.onSearchSubmit}
                            loading={actionLogState.loading}/>
                <br/>
                <Table size="middle"
                       columns={tableColumns}
                       dataSource={actionLogState.loggedActions.toJS()}
                       rowKey="id"
                       onChange={this.onPageChange}
                       pagination={pagination}
                       loading={actionLogState.loading}/>
            </div>
        );
    }
}

const dispatchToProps = (dispatch) => {
    return {
        fetchActionLog: bindActionCreators(ActionLogActions.getActionLog, dispatch),
        fetchUsers: bindActionCreators(UsersOptionsActions.getList, dispatch),
    };
};

const getStoresMap = (state) => {
    return {
        user: state.auth.user,
        dictionary: state.dictionary,
        actionLogState: state.actionLogState,
        usersOptionsState: state.usersOptionsState,
    };
};

export default connect(getStoresMap, dispatchToProps)(ActionLog);
