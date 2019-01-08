import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {bindActionCreators} from 'redux';
import {Breadcrumb, Icon, notification, Pagination, Card, Timeline} from 'antd';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {Permissions, Urls} from '../../constants';

import Dictionary from '../../records/Dictionary';
import AccountState from '../../records/AccountState';
import AccountActionLogSearch from '../../records/AccountActionLogSearch';
import AccountActionLogState from '../../records/AccountActionLogState';
import AccountActions from '../../actions/AccountActions';
import AccountActionLogActions from '../../actions/AccountActionLogActions';

import TimelineDateRangeForm from './TimelineDateRangeForm'
import TimelineItem from './TimelineItem'
import Form from './Form';
import {extractSearchQuery} from '../../helpers/urlQueries';

class Account extends React.PureComponent {
    static propTypes = {
        dictionary: PropTypes.instanceOf(Dictionary).isRequired,
        accountState: PropTypes.instanceOf(AccountState).isRequired,
        accountActionLogState: PropTypes.instanceOf(AccountActionLogState).isRequired,
        fetchActionLog: PropTypes.func.isRequired,
        fetchAccount: PropTypes.func.isRequired,
    };


    componentWillMount() {
        const params = extractSearchQuery(this.props.location.search);
        const search = AccountActionLogSearch.fromJSON(params);
        this.props.fetchAccount();
        this.props.fetchActionLog(search);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.search !== this.props.location.search) {
            const params = extractSearchQuery(nextProps.location.search);
            const search = AccountActionLogSearch.fromJSON(params);
            this.props.fetchActionLog(search);
        }
    }

    onSubmit = async (values) => {
        const {updateAccount, dictionary} = this.props;
        try {
            await updateAccount(values);
            notification.success({
                message: dictionary.getByKey("ACCOUNT_UPDATE_SUCCESS_NOTIFICATION_TITLE"),
                description: dictionary.getByKey("ACCOUNT_UPDATE_SUCCESS_NOTIFICATION_DESCRIPTION")
            });
        } catch (err) {
            notification.error({
                message: dictionary.getByKey("ACCOUNT_UPDATE_API_ERROR_NOTIFICATION_TITLE"),
                description: dictionary.getByKey("ACCOUNT_UPDATE_API_ERROR_NOTIFICATION_DESCRIPTION")
            });
        }
    };

    onTimelineRangeSubmit = ({range}) => {
        const {accountActionLogState, history} = this.props;
        const newSearch = accountActionLogState.search.merge({
            fromDate: range[0],
            toDate: range[1]
        });
        history.push({
            pathname: Urls.ACCOUNT,
            search: newSearch.toQueryString()
        });
    };

    onTimelinePageChange = (page) => {
        const {accountActionLogState, history} = this.props;
        const newSearch = accountActionLogState.search.set('page', page);
        history.push({
            pathname: Urls.ACCOUNT,
            search: newSearch.toQueryString()
        });
    };

    render() {
        const {dictionary, user, accountState, accountActionLogState} = this.props;

        return (
            <div className="content-section-inner">
                <Helmet>
                    <title>{dictionary.getByKey("ACCOUNT_TITLE")}</title>
                </Helmet>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to={Urls.HOME}>
                            <Icon type="home"/>
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Icon type="edit"/> {dictionary.getByKey("ACCOUNT_BREADCRUMB")}
                    </Breadcrumb.Item>
                </Breadcrumb>
                <h2>{dictionary.getByKey("ACCOUNT_TITLE")}</h2>
                <Card>
                    <Form dictionary={dictionary}
                          user={accountState.user}
                          onSubmit={this.onSubmit}
                          disabled={!user.hasPermission(Permissions.ACCOUNT_UPDATE)}
                          loading={accountState.loading}/>

                </Card>
                <br/>
                <Card title="Action log">
                    <TimelineDateRangeForm dictionary={dictionary}
                                           fromDate={accountActionLogState.search.fromDate}
                                           toDate={accountActionLogState.search.toDate}
                                           onSubmit={this.onTimelineRangeSubmit}
                                           loading={accountActionLogState.loading}/>
                    <br/>
                    <Timeline>
                        {accountActionLogState.loggedActions.map(
                            action => <TimelineItem key={action.id} loggedAction={action} user={user}
                                                    dictionary={dictionary}/>
                        )}
                    </Timeline>
                    <br/>
                    <Pagination size="small"
                                current={accountActionLogState.search.page}
                                pageSize={accountActionLogState.search.limit}
                                total={accountActionLogState.count}
                                hideOnSinglePage={true}
                                onChange={this.onTimelinePageChange}/>
                </Card>
            </div>
        );
    }
}

const dispatchToProps = (dispatch) => {
    return {
        fetchActionLog: bindActionCreators(AccountActionLogActions.getActionLog, dispatch),
        fetchAccount: bindActionCreators(AccountActions.get, dispatch),
        updateAccount: bindActionCreators(AccountActions.update, dispatch),
    };
};

const getStoresMap = (state) => {
    return {
        user: state.auth.user,
        dictionary: state.dictionary,
        accountState: state.accountState,
        accountActionLogState: state.accountActionLogState,
    };
};

export default connect(getStoresMap, dispatchToProps)(Account);
