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

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

var _urlQueries = require('../../helpers/urlQueries');

var _constants = require('../../constants');

var _Dictionary = require('../../records/Dictionary');

var _Dictionary2 = _interopRequireDefault(_Dictionary);

var _UsersState = require('../../records/UsersState');

var _UsersState2 = _interopRequireDefault(_UsersState);

var _UsersActions = require('../../actions/UsersActions');

var _UsersActions2 = _interopRequireDefault(_UsersActions);

var _IsAuthorised = require('./../IsAuthorised');

var _IsAuthorised2 = _interopRequireDefault(_IsAuthorised);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Listing = function (_React$PureComponent) {
    (0, _inherits3.default)(Listing, _React$PureComponent);

    function Listing() {
        var _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Listing);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.state = {
            idsToDelete: []
        }, _this.handleTableChange = function (pagination) {
            var _this$props = _this.props,
                usersState = _this$props.usersState,
                history = _this$props.history;

            var newPagination = usersState.pagination.set('page', pagination.current);
            history.push({
                pathname: _constants.Urls.MY_TICKETS,
                search: newPagination.toQueryString()
            });
        }, _this.handleSingleDelete = function (id) {
            return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var _this$props2, dictionary, deleteSingle, location, fetchUsers, _extractPaginationQue, page, limit;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _this$props2 = _this.props, dictionary = _this$props2.dictionary, deleteSingle = _this$props2.deleteSingle, location = _this$props2.location, fetchUsers = _this$props2.fetchUsers;
                                _context.prev = 1;
                                _context.next = 4;
                                return deleteSingle(id);

                            case 4:
                                _antd.notification.success({
                                    message: dictionary.getByKey("USERS_LISTING_DELETE_SINGLE_SUCCESS_NOTIFICATION_TITLE"),
                                    description: dictionary.getByKey("USERS_LISTING_DELETE_SINGLE_SUCCESS_NOTIFICATION_DESCRIPTION")
                                });
                                _extractPaginationQue = (0, _urlQueries.extractPaginationQuery)(location.search), page = _extractPaginationQue.page, limit = _extractPaginationQue.limit;

                                fetchUsers(page, limit);
                                _context.next = 13;
                                break;

                            case 9:
                                _context.prev = 9;
                                _context.t0 = _context['catch'](1);

                                console.log(_context.t0);
                                _antd.notification.error({
                                    message: dictionary.getByKey("USERS_LISTING_DELETE_SINGLE_ERROR_NOTIFICATION_TITLE"),
                                    description: dictionary.getByKey("USERS_LISTING_DELETE_SINGLE_ERROR_NOTIFICATION_DESCRIPTION")
                                });

                            case 13:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[1, 9]]);
            }));
        }, _this.handleMultipleDelete = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var _this$props3, dictionary, deleteMultiple, location, fetchUsers, _extractPaginationQue2, page, limit;

            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _this$props3 = _this.props, dictionary = _this$props3.dictionary, deleteMultiple = _this$props3.deleteMultiple, location = _this$props3.location, fetchUsers = _this$props3.fetchUsers;
                            _context2.prev = 1;
                            _context2.next = 4;
                            return deleteMultiple(_this.state.idsToDelete);

                        case 4:
                            _antd.notification.success({
                                message: dictionary.getByKey("USERS_LISTING_DELETE_MULTIPLE_SUCCESS_NOTIFICATION_TITLE"),
                                description: dictionary.getByKey("USERS_LISTING_DELETE_MULTIPLE_SUCCESS_NOTIFICATION_DESCRIPTION")
                            });
                            _extractPaginationQue2 = (0, _urlQueries.extractPaginationQuery)(location.search), page = _extractPaginationQue2.page, limit = _extractPaginationQue2.limit;

                            fetchUsers(page, limit);
                            _context2.next = 12;
                            break;

                        case 9:
                            _context2.prev = 9;
                            _context2.t0 = _context2['catch'](1);

                            _antd.notification.error({
                                message: dictionary.getByKey("USERS_LISTING_DELETE_MULTIPLE_ERROR_NOTIFICATION_TITLE"),
                                description: dictionary.getByKey("USERS_LISTING_DELETE_MULTIPLE_ERROR_NOTIFICATION_DESCRIPTION")
                            });

                        case 12:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2, [[1, 9]]);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    Listing.prototype.componentWillMount = function componentWillMount() {
        var _extractPaginationQue3 = (0, _urlQueries.extractPaginationQuery)(this.props.location.search),
            page = _extractPaginationQue3.page,
            limit = _extractPaginationQue3.limit;

        this.props.fetchUsers(page, limit);
    };

    Listing.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (nextProps.location.search !== this.props.location.search) {
            var _extractPaginationQue4 = (0, _urlQueries.extractPaginationQuery)(nextProps.location.search),
                page = _extractPaginationQue4.page,
                limit = _extractPaginationQue4.limit;

            this.props.fetchUsers(page, limit);
        }
    };

    Listing.prototype.getTableRowConfig = function getTableRowConfig() {
        var _this3 = this;

        return {
            onChange: function onChange(selectedRowKeys) {
                _this3.setState({
                    idsToDelete: selectedRowKeys
                });
            }
        };
    };

    Listing.prototype.getTableColConfig = function getTableColConfig() {
        var _this4 = this;

        var _props = this.props,
            dictionary = _props.dictionary,
            user = _props.user;


        return [{
            title: dictionary.getByKey("USERS_LISTING_TABLE_EMAIL_COL"),
            dataIndex: 'email'
        }, {
            title: dictionary.getByKey("USERS_LISTING_TABLE_NAME_COL"),
            dataIndex: 'first_name',
            render: function render(text, record) {
                return record.first_name + ' ' + record.last_name;
            }
        }, {
            title: dictionary.getByKey("USERS_LISTING_TABLE_ROLE_COL"),
            dataIndex: 'role',
            render: function render(role) {
                return role.name;
            }
        }, {
            title: '',
            width: 100,
            dataIndex: 'id',
            render: function render(id) {
                return _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        _antd.Button.Group,
                        { size: 'small' },
                        _react2.default.createElement(
                            _IsAuthorised2.default,
                            { user: user, permission: _constants.Permissions.USER_VIEW },
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: _constants.Urls.USERS + '/' + id, className: 'ant-btn ant-btn-default ant-btn-icon-only', tittle: dictionary.getByKey("USERS_LISTING_EDIT_BUTTON") },
                                _react2.default.createElement(_antd.Icon, { type: 'edit' })
                            )
                        ),
                        _react2.default.createElement(
                            _IsAuthorised2.default,
                            { user: user, permission: _constants.Permissions.USER_DELETE },
                            _react2.default.createElement(
                                _antd.Popconfirm,
                                { title: dictionary.getByKey("USERS_LISTING_DELETE_SINGLE_CONFIRMATION"),
                                    okText: dictionary.getByKey("YES"),
                                    cancelText: dictionary.getByKey("NO"),
                                    onConfirm: _this4.handleSingleDelete(id) },
                                _react2.default.createElement(_antd.Button, { type: 'danger', icon: 'delete', title: dictionary.getByKey("USERS_LISTING_DELETE_BUTTON") })
                            )
                        )
                    )
                );
            }
        }];
    };

    Listing.prototype.render = function render() {
        var _props2 = this.props,
            dictionary = _props2.dictionary,
            usersState = _props2.usersState,
            user = _props2.user;

        var pagination = {
            total: usersState.pagination.count,
            current: usersState.pagination.page,
            pageSize: usersState.pagination.limit
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
                    dictionary.getByKey("USERS_LISTING_TITLE")
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
                    _react2.default.createElement(_antd.Icon, { type: 'team' }),
                    ' ',
                    dictionary.getByKey("USERS_LISTING_BREADCRUMB")
                )
            ),
            _react2.default.createElement(
                _IsAuthorised2.default,
                { user: user, permission: _constants.Permissions.USERS_CREATE },
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: _constants.Urls.USERS_CREATE },
                    _react2.default.createElement(
                        _antd.Button,
                        { type: 'primary' },
                        _react2.default.createElement(_antd.Icon, { type: 'plus-circle' }),
                        ' ',
                        dictionary.getByKey("USERS_LISTING_CREATE_BUTTON")
                    )
                ),
                '\xA0'
            ),
            _react2.default.createElement(
                _IsAuthorised2.default,
                { user: user, permission: _constants.Permissions.USERS_DELETE },
                _react2.default.createElement(
                    _antd.Popconfirm,
                    { title: dictionary.getByKey("USERS_LISTING_DELETE_MULTIPLE_CONFIRMATION"),
                        okText: dictionary.getByKey("YES"),
                        cancelText: dictionary.getByKey("NO"),
                        onConfirm: this.handleMultipleDelete },
                    _react2.default.createElement(
                        _antd.Button,
                        { type: 'danger' },
                        _react2.default.createElement(_antd.Icon, { type: 'delete' }),
                        ' ',
                        dictionary.getByKey("USERS_LISTING_DELETE_MULTIPLE_BUTTON")
                    )
                )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement(_antd.Table, { size: 'small',
                rowSelection: this.getTableRowConfig(),
                rowKey: 'id',
                columns: this.getTableColConfig(),
                pagination: pagination,
                loading: usersState.loading,
                onChange: this.handleTableChange,
                dataSource: usersState.users.toJS() })
        );
    };

    return Listing;
}(_react2.default.PureComponent);

Listing.propTypes = {
    dictionary: _propTypes2.default.instanceOf(_Dictionary2.default).isRequired,
    usersState: _propTypes2.default.instanceOf(_UsersState2.default).isRequired,
    fetchUsers: _propTypes2.default.func.isRequired,
    deleteSingle: _propTypes2.default.func.isRequired,
    deleteMultiple: _propTypes2.default.func.isRequired
};


var dispatchToProps = function dispatchToProps(dispatch) {
    return {
        fetchUsers: (0, _redux.bindActionCreators)(_UsersActions2.default.getList, dispatch),
        deleteSingle: (0, _redux.bindActionCreators)(_UsersActions2.default.delete, dispatch),
        deleteMultiple: (0, _redux.bindActionCreators)(_UsersActions2.default.deleteList, dispatch)
    };
};

var getStoresMap = function getStoresMap(state) {
    return {
        user: state.auth.user,
        dictionary: state.dictionary,
        usersState: state.usersState
    };
};

exports.default = (0, _reactRedux.connect)(getStoresMap, dispatchToProps)(Listing);
module.exports = exports.default;