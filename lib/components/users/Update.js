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

var _connectedReactRouter = require('connected-react-router');

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

var _constants = require('../../constants');

var _Dictionary = require('../../records/Dictionary');

var _Dictionary2 = _interopRequireDefault(_Dictionary);

var _UserState = require('../../records/UserState');

var _UserState2 = _interopRequireDefault(_UserState);

var _RolesOptionsState = require('../../records/RolesOptionsState');

var _RolesOptionsState2 = _interopRequireDefault(_RolesOptionsState);

var _RolesOptionsActions = require('../../actions/RolesOptionsActions');

var _RolesOptionsActions2 = _interopRequireDefault(_RolesOptionsActions);

var _UsersActions = require('../../actions/UsersActions');

var _UsersActions2 = _interopRequireDefault(_UsersActions);

var _ForceLogoutActions = require('../../actions/ForceLogoutActions');

var _ForceLogoutActions2 = _interopRequireDefault(_ForceLogoutActions);

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Update = function (_React$PureComponent) {
    (0, _inherits3.default)(Update, _React$PureComponent);

    function Update() {
        var _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Update);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.onSubmit = function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(values) {
                var _this$props, updateUser, dictionary, navigateTo, match;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _this$props = _this.props, updateUser = _this$props.updateUser, dictionary = _this$props.dictionary, navigateTo = _this$props.navigateTo, match = _this$props.match;
                                _context.prev = 1;
                                _context.next = 4;
                                return updateUser(match.params.id, values);

                            case 4:
                                _antd.notification.success({
                                    message: dictionary.getByKey("USER_UPDATE_SUCCESS_NOTIFICATION_TITLE"),
                                    description: dictionary.getByKey("USER_UPDATE_SUCCESS_NOTIFICATION_DESCRIPTION")
                                });
                                navigateTo(_constants.Urls.USERS);
                                _context.next = 11;
                                break;

                            case 8:
                                _context.prev = 8;
                                _context.t0 = _context['catch'](1);

                                _antd.notification.error({
                                    message: dictionary.getByKey("USER_UPDATE_API_ERROR_NOTIFICATION_TITLE"),
                                    description: dictionary.getByKey("USER_UPDATE_API_ERROR_NOTIFICATION_DESCRIPTION")
                                });

                            case 11:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[1, 8]]);
            }));

            return function (_x) {
                return _ref.apply(this, arguments);
            };
        }(), _this.handleUserLogout = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var _this$props2, logoutUser, dictionary, match, fetchUser;

            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _this$props2 = _this.props, logoutUser = _this$props2.logoutUser, dictionary = _this$props2.dictionary, match = _this$props2.match, fetchUser = _this$props2.fetchUser;
                            _context2.prev = 1;
                            _context2.next = 4;
                            return logoutUser([match.params.id]);

                        case 4:
                            _antd.notification.success({
                                message: dictionary.getByKey("USER_LOGOUT_SUCCESS_NOTIFICATION_TITLE"),
                                description: dictionary.getByKey("USER_LOGOUT_SUCCESS_NOTIFICATION_DESCRIPTION")
                            });
                            fetchUser(match.params.id);
                            _context2.next = 11;
                            break;

                        case 8:
                            _context2.prev = 8;
                            _context2.t0 = _context2['catch'](1);

                            _antd.notification.error({
                                message: dictionary.getByKey("USER_UPDATE_LOGOUT_ERROR_NOTIFICATION_TITLE"),
                                description: dictionary.getByKey("USER_UPDATE_LOGOUT_ERROR_NOTIFICATION_DESCRIPTION")
                            });

                        case 11:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2, [[1, 8]]);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    Update.prototype.componentWillMount = function componentWillMount() {
        this.props.fetchUser(this.props.match.params.id);
        this.props.fetchRolesOptions();
    };

    Update.prototype.render = function render() {
        var _props = this.props,
            dictionary = _props.dictionary,
            rolesOptionsState = _props.rolesOptionsState,
            userState = _props.userState,
            user = _props.user;

        return _react2.default.createElement(
            'div',
            { className: 'content-section-inner' },
            _react2.default.createElement(
                _reactHelmet.Helmet,
                null,
                _react2.default.createElement(
                    'title',
                    null,
                    dictionary.getByKey("USER_UPDATE_TITLE")
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
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: _constants.Urls.USERS },
                        _react2.default.createElement(_antd.Icon, { type: 'team' }),
                        ' ',
                        dictionary.getByKey("USERS_LISTING_BREADCRUMB")
                    )
                ),
                _react2.default.createElement(
                    _antd.Breadcrumb.Item,
                    null,
                    _react2.default.createElement(_antd.Icon, { type: 'edit' }),
                    ' ',
                    dictionary.getByKey("USER_UPDATE_BREADCRUMB")
                )
            ),
            _react2.default.createElement(
                'h2',
                null,
                dictionary.getByKey("USER_UPDATE_TITLE"),
                !user.hasPermission(_constants.Permissions.FORCE_LOGOUT) && userState.user && userState.user.token_count > 0 && _react2.default.createElement(
                    _antd.Button,
                    { type: 'dashed', disabled: true, className: 'pull-right' },
                    dictionary.getByKey("USER_UPDATE_LOGOUT_BUTTON_LOGGED_IN")
                ),
                user.hasPermission(_constants.Permissions.FORCE_LOGOUT) && userState.user && userState.user.token_count > 0 && _react2.default.createElement(
                    _antd.Popconfirm,
                    { title: dictionary.getByKey("USER_UPDATE_LOGOUT_USER_CONFIRMATION_TITLE"),
                        okText: dictionary.getByKey("YES"),
                        cancelText: dictionary.getByKey("NO"),
                        onConfirm: this.handleUserLogout },
                    _react2.default.createElement(
                        _antd.Button,
                        { type: 'danger', icon: 'logout', className: 'pull-right' },
                        dictionary.getByKey("USER_UPDATE_LOGOUT_BUTTON_LOGOUT")
                    )
                )
            ),
            _react2.default.createElement(_Form2.default, { dictionary: dictionary,
                user: userState.user,
                roles: rolesOptionsState.roles,
                onSubmit: this.onSubmit,
                disabled: !user.hasPermission(_constants.Permissions.USER_UPDATE),
                loading: userState.loading || rolesOptionsState.loading })
        );
    };

    return Update;
}(_react2.default.PureComponent);

Update.propTypes = {
    dictionary: _propTypes2.default.instanceOf(_Dictionary2.default).isRequired,
    rolesOptionsState: _propTypes2.default.instanceOf(_RolesOptionsState2.default).isRequired,
    userState: _propTypes2.default.instanceOf(_UserState2.default).isRequired,
    fetchUser: _propTypes2.default.func.isRequired,
    logoutUser: _propTypes2.default.func.isRequired,
    updateUser: _propTypes2.default.func.isRequired,
    navigateTo: _propTypes2.default.func.isRequired
};


var dispatchToProps = function dispatchToProps(dispatch) {
    return {
        fetchRolesOptions: (0, _redux.bindActionCreators)(_RolesOptionsActions2.default.getList, dispatch),
        fetchUser: (0, _redux.bindActionCreators)(_UsersActions2.default.get, dispatch),
        updateUser: (0, _redux.bindActionCreators)(_UsersActions2.default.update, dispatch),
        logoutUser: (0, _redux.bindActionCreators)(_ForceLogoutActions2.default.logout, dispatch),
        navigateTo: (0, _redux.bindActionCreators)(_connectedReactRouter.push, dispatch)
    };
};

var getStoresMap = function getStoresMap(state) {
    return {
        user: state.auth.user,
        dictionary: state.dictionary,
        rolesOptionsState: state.rolesOptionsState,
        userState: state.userState
    };
};

exports.default = (0, _reactRedux.connect)(getStoresMap, dispatchToProps)(Update);
module.exports = exports.default;