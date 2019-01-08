'use strict';

exports.__esModule = true;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _constants = require('../../constants');

var _Dictionary = require('../../records/Dictionary');

var _Dictionary2 = _interopRequireDefault(_Dictionary);

var _AccountState = require('../../records/AccountState');

var _AccountState2 = _interopRequireDefault(_AccountState);

var _AccountActionLogSearch = require('../../records/AccountActionLogSearch');

var _AccountActionLogSearch2 = _interopRequireDefault(_AccountActionLogSearch);

var _AccountActionLogState = require('../../records/AccountActionLogState');

var _AccountActionLogState2 = _interopRequireDefault(_AccountActionLogState);

var _AccountActions = require('../../actions/AccountActions');

var _AccountActions2 = _interopRequireDefault(_AccountActions);

var _AccountActionLogActions = require('../../actions/AccountActionLogActions');

var _AccountActionLogActions2 = _interopRequireDefault(_AccountActionLogActions);

var _TimelineDateRangeForm = require('./TimelineDateRangeForm');

var _TimelineDateRangeForm2 = _interopRequireDefault(_TimelineDateRangeForm);

var _TimelineItem = require('./TimelineItem');

var _TimelineItem2 = _interopRequireDefault(_TimelineItem);

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

var _urlQueries = require('../../helpers/urlQueries');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Account = function (_React$PureComponent) {
    (0, _inherits3.default)(Account, _React$PureComponent);

    function Account() {
        var _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Account);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.onSubmit = function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(values) {
                var _this$props, updateAccount, dictionary;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _this$props = _this.props, updateAccount = _this$props.updateAccount, dictionary = _this$props.dictionary;
                                _context.prev = 1;
                                _context.next = 4;
                                return updateAccount(values);

                            case 4:
                                _antd.notification.success({
                                    message: dictionary.getByKey("ACCOUNT_UPDATE_SUCCESS_NOTIFICATION_TITLE"),
                                    description: dictionary.getByKey("ACCOUNT_UPDATE_SUCCESS_NOTIFICATION_DESCRIPTION")
                                });
                                _context.next = 10;
                                break;

                            case 7:
                                _context.prev = 7;
                                _context.t0 = _context['catch'](1);

                                _antd.notification.error({
                                    message: dictionary.getByKey("ACCOUNT_UPDATE_API_ERROR_NOTIFICATION_TITLE"),
                                    description: dictionary.getByKey("ACCOUNT_UPDATE_API_ERROR_NOTIFICATION_DESCRIPTION")
                                });

                            case 10:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[1, 7]]);
            }));

            return function (_x) {
                return _ref.apply(this, arguments);
            };
        }(), _this.onTimelineRangeSubmit = function (_ref2) {
            var range = _ref2.range;
            var _this$props2 = _this.props,
                accountActionLogState = _this$props2.accountActionLogState,
                history = _this$props2.history;

            var newSearch = accountActionLogState.search.merge({
                fromDate: range[0],
                toDate: range[1]
            });
            history.push({
                pathname: _constants.Urls.ACCOUNT,
                search: newSearch.toQueryString()
            });
        }, _this.onTimelinePageChange = function (page) {
            var _this$props3 = _this.props,
                accountActionLogState = _this$props3.accountActionLogState,
                history = _this$props3.history;

            var newSearch = accountActionLogState.search.set('page', page);
            history.push({
                pathname: _constants.Urls.ACCOUNT,
                search: newSearch.toQueryString()
            });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    Account.prototype.componentWillMount = function componentWillMount() {
        var params = (0, _urlQueries.extractSearchQuery)(this.props.location.search);
        var search = _AccountActionLogSearch2.default.fromJSON(params);
        this.props.fetchAccount();
        this.props.fetchActionLog(search);
    };

    Account.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (nextProps.location.search !== this.props.location.search) {
            var params = (0, _urlQueries.extractSearchQuery)(nextProps.location.search);
            var search = _AccountActionLogSearch2.default.fromJSON(params);
            this.props.fetchActionLog(search);
        }
    };

    Account.prototype.render = function render() {
        var _props = this.props,
            dictionary = _props.dictionary,
            user = _props.user,
            accountState = _props.accountState,
            accountActionLogState = _props.accountActionLogState;


        return _react2.default.createElement(
            'div',
            { className: 'content-section-inner' },
            _react2.default.createElement(
                _reactHelmet.Helmet,
                null,
                _react2.default.createElement(
                    'title',
                    null,
                    dictionary.getByKey("ACCOUNT_TITLE")
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
                    dictionary.getByKey("ACCOUNT_BREADCRUMB")
                )
            ),
            _react2.default.createElement(
                'h2',
                null,
                dictionary.getByKey("ACCOUNT_TITLE")
            ),
            _react2.default.createElement(
                _antd.Card,
                null,
                _react2.default.createElement(_Form2.default, { dictionary: dictionary,
                    user: accountState.user,
                    onSubmit: this.onSubmit,
                    disabled: !user.hasPermission(_constants.Permissions.ACCOUNT_UPDATE),
                    loading: accountState.loading })
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
                _antd.Card,
                { title: 'Action log' },
                _react2.default.createElement(_TimelineDateRangeForm2.default, { dictionary: dictionary,
                    fromDate: accountActionLogState.search.fromDate,
                    toDate: accountActionLogState.search.toDate,
                    onSubmit: this.onTimelineRangeSubmit,
                    loading: accountActionLogState.loading }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    _antd.Timeline,
                    null,
                    accountActionLogState.loggedActions.map(function (action) {
                        return _react2.default.createElement(_TimelineItem2.default, { key: action.id, loggedAction: action, user: user,
                            dictionary: dictionary });
                    })
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(_antd.Pagination, { size: 'small',
                    current: accountActionLogState.search.page,
                    pageSize: accountActionLogState.search.limit,
                    total: accountActionLogState.count,
                    hideOnSinglePage: true,
                    onChange: this.onTimelinePageChange })
            )
        );
    };

    return Account;
}(_react2.default.PureComponent);

Account.propTypes = {
    dictionary: _propTypes2.default.instanceOf(_Dictionary2.default).isRequired,
    accountState: _propTypes2.default.instanceOf(_AccountState2.default).isRequired,
    accountActionLogState: _propTypes2.default.instanceOf(_AccountActionLogState2.default).isRequired,
    fetchActionLog: _propTypes2.default.func.isRequired,
    fetchAccount: _propTypes2.default.func.isRequired
};


var dispatchToProps = function dispatchToProps(dispatch) {
    return {
        fetchActionLog: (0, _redux.bindActionCreators)(_AccountActionLogActions2.default.getActionLog, dispatch),
        fetchAccount: (0, _redux.bindActionCreators)(_AccountActions2.default.get, dispatch),
        updateAccount: (0, _redux.bindActionCreators)(_AccountActions2.default.update, dispatch)
    };
};

var getStoresMap = function getStoresMap(state) {
    return {
        user: state.auth.user,
        dictionary: state.dictionary,
        accountState: state.accountState,
        accountActionLogState: state.accountActionLogState
    };
};

exports.default = (0, _reactRedux.connect)(getStoresMap, dispatchToProps)(Account);
module.exports = exports.default;