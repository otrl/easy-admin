'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHelmet = require('react-helmet');

var _redux = require('redux');

var _antd = require('antd');

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _constants = require('../../constants');

var _Dictionary = require('../../records/Dictionary');

var _Dictionary2 = _interopRequireDefault(_Dictionary);

var _ActionLogSearch = require('../../records/ActionLogSearch');

var _ActionLogSearch2 = _interopRequireDefault(_ActionLogSearch);

var _ActionLogState = require('../../records/ActionLogState');

var _ActionLogState2 = _interopRequireDefault(_ActionLogState);

var _UsersOptionsState = require('../../records/UsersOptionsState');

var _UsersOptionsState2 = _interopRequireDefault(_UsersOptionsState);

var _ActionLogActions = require('../../actions/ActionLogActions');

var _ActionLogActions2 = _interopRequireDefault(_ActionLogActions);

var _UsersOptionsActions = require('../../actions/UsersOptionsActions');

var _UsersOptionsActions2 = _interopRequireDefault(_UsersOptionsActions);

var _SearchForm = require('./SearchForm');

var _SearchForm2 = _interopRequireDefault(_SearchForm);

var _urlQueries = require('../../helpers/urlQueries');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionLog = function (_React$PureComponent) {
    (0, _inherits3.default)(ActionLog, _React$PureComponent);

    function ActionLog() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ActionLog);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.onUserSelectType = function (searchString) {
            if (searchString.length >= 3) {
                _this.props.fetchUsers(searchString);
            }
        }, _this.onSearchSubmit = function (_ref) {
            var range = _ref.range,
                userId = _ref.userId,
                action = _ref.action,
                resourceType = _ref.resourceType;
            var _this$props = _this.props,
                actionLogState = _this$props.actionLogState,
                history = _this$props.history;

            var newSearch = actionLogState.search.merge({
                fromDate: range[0],
                toDate: range[1],
                userId: userId,
                action: action,
                resourceType: resourceType,
                page: 1
            });
            history.push({
                pathname: _constants.Urls.ACTION_LOG,
                search: newSearch.toQueryString()
            });
        }, _this.onPageChange = function (pagination) {
            var _this$props2 = _this.props,
                actionLogState = _this$props2.actionLogState,
                history = _this$props2.history;

            var newSearch = actionLogState.search.set('page', pagination.current);
            history.push({
                pathname: _constants.Urls.ACTION_LOG,
                search: newSearch.toQueryString()
            });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    ActionLog.prototype.componentWillMount = function componentWillMount() {
        var params = (0, _urlQueries.extractSearchQuery)(this.props.location.search);
        var search = _ActionLogSearch2.default.fromJSON(params);
        this.props.fetchActionLog(search);
    };

    ActionLog.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (nextProps.location.search !== this.props.location.search) {
            var params = (0, _urlQueries.extractSearchQuery)(nextProps.location.search);
            var search = _ActionLogSearch2.default.fromJSON(params);
            this.props.fetchActionLog(search);
        }
    };

    ActionLog.prototype.render = function render() {
        var _props = this.props,
            dictionary = _props.dictionary,
            user = _props.user,
            actionLogState = _props.actionLogState,
            usersOptionsState = _props.usersOptionsState;


        var tableColumns = [{
            title: 'Event',
            dataIndex: 'id',
            key: 'id',
            render: function render(text, record) {
                var msg = 'LOGGED_ACTION_' + record.action;
                if (record.resource_type) {
                    msg = msg + '_' + record.resource_type;
                }

                return user.hasPermission(_constants.Permissions.USER_VIEW) ? _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: _constants.Urls.USERS + '/' + record.user_id },
                    dictionary.getByKey(msg, {
                        name: record.user_name,
                        date: record.created_at.format("h:mm DD/MM/YY"),
                        id: record.resource_identifier
                    })
                ) : dictionary.getByKey(msg, {
                    name: record.user_name,
                    date: record.created_at.format("h:mm DD/MM/YY"),
                    id: record.resource_identifier
                });
            }
        }];

        var pagination = {
            total: actionLogState.count,
            current: actionLogState.search.page,
            pageSize: actionLogState.search.limit
        };

        return _react2.default.createElement(
            'div',
            { className: 'content-section-inner' },
            _react2.default.createElement(
                _reactHelmet.Helmet,
                null,
                _react2.default.createElement(
                    'title',
                    null,
                    dictionary.getByKey("ACTION_LOG_TITLE")
                )
            ),
            _react2.default.createElement(
                _antd.Breadcrumb,
                null,
                _react2.default.createElement(
                    _antd.Breadcrumb.Item,
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: _constants.Urls.HOME },
                        _react2.default.createElement(_antd.Icon, { type: 'home' })
                    )
                ),
                _react2.default.createElement(
                    _antd.Breadcrumb.Item,
                    null,
                    _react2.default.createElement(_antd.Icon, { type: 'edit' }),
                    ' ',
                    dictionary.getByKey("ACTION_LOG_BREADCRUMB")
                )
            ),
            _react2.default.createElement(
                'h2',
                null,
                dictionary.getByKey("ACTION_LOG_TITLE")
            ),
            _react2.default.createElement(_SearchForm2.default, { dictionary: dictionary,
                usersOptionsState: usersOptionsState,
                onUserSelectType: _lodash2.default.debounce(this.onUserSelectType, 300),
                search: actionLogState.search,
                onSubmit: this.onSearchSubmit,
                loading: actionLogState.loading }),
            _react2.default.createElement('br', null),
            _react2.default.createElement(_antd.Table, { size: 'middle',
                columns: tableColumns,
                dataSource: actionLogState.loggedActions.toJS(),
                rowKey: 'id',
                onChange: this.onPageChange,
                pagination: pagination,
                loading: actionLogState.loading })
        );
    };

    return ActionLog;
}(_react2.default.PureComponent);

ActionLog.propTypes = {
    dictionary: _propTypes2.default.instanceOf(_Dictionary2.default).isRequired,
    usersOptionsState: _propTypes2.default.instanceOf(_UsersOptionsState2.default).isRequired,
    actionLogState: _propTypes2.default.instanceOf(_ActionLogState2.default).isRequired,
    fetchUsers: _propTypes2.default.func.isRequired,
    fetchActionLog: _propTypes2.default.func.isRequired
};


var dispatchToProps = function dispatchToProps(dispatch) {
    return {
        fetchActionLog: (0, _redux.bindActionCreators)(_ActionLogActions2.default.getActionLog, dispatch),
        fetchUsers: (0, _redux.bindActionCreators)(_UsersOptionsActions2.default.getList, dispatch)
    };
};

var getStoresMap = function getStoresMap(state) {
    return {
        user: state.auth.user,
        dictionary: state.dictionary,
        actionLogState: state.actionLogState,
        usersOptionsState: state.usersOptionsState
    };
};

exports.default = (0, _reactRedux.connect)(getStoresMap, dispatchToProps)(ActionLog);
module.exports = exports.default;