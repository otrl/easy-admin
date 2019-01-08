'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _antd = require('antd');

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reactMedia = require('react-media');

var _reactMedia2 = _interopRequireDefault(_reactMedia);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _constants = require('../../constants');

var _UiActions = require('../../actions/UiActions');

var _UiActions2 = _interopRequireDefault(_UiActions);

var _UiState = require('../../records/UiState');

var _UiState2 = _interopRequireDefault(_UiState);

var _User = require('../../records/User');

var _User2 = _interopRequireDefault(_User);

var _Dictionary = require('../../records/Dictionary');

var _Dictionary2 = _interopRequireDefault(_Dictionary);

var _MenuSection = require('./MenuSection');

var _MenuSection2 = _interopRequireDefault(_MenuSection);

var _HeaderSection = require('./HeaderSection');

var _HeaderSection2 = _interopRequireDefault(_HeaderSection);

var _FooterSection = require('./FooterSection');

var _FooterSection2 = _interopRequireDefault(_FooterSection);

var _Listing = require('../roles/Listing');

var _Listing2 = _interopRequireDefault(_Listing);

var _Create = require('../roles/Create');

var _Create2 = _interopRequireDefault(_Create);

var _Update = require('../roles/Update');

var _Update2 = _interopRequireDefault(_Update);

var _Listing3 = require('../users/Listing');

var _Listing4 = _interopRequireDefault(_Listing3);

var _Create3 = require('../users/Create');

var _Create4 = _interopRequireDefault(_Create3);

var _Update3 = require('../users/Update');

var _Update4 = _interopRequireDefault(_Update3);

var _account = require('../account');

var _account2 = _interopRequireDefault(_account);

var _actionLog = require('../action-log');

var _actionLog2 = _interopRequireDefault(_actionLog);

var _Listing5 = require('../customers/Listing');

var _Listing6 = _interopRequireDefault(_Listing5);

var _Listing7 = require('../cardholders/Listing');

var _Listing8 = _interopRequireDefault(_Listing7);

var _smartcard = require('../smartcard');

var _smartcard2 = _interopRequireDefault(_smartcard);

var _AuthorisedRoute = require('../AuthorisedRoute');

var _AuthorisedRoute2 = _interopRequireDefault(_AuthorisedRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function (_React$PureComponent) {
    (0, _inherits3.default)(Layout, _React$PureComponent);

    function Layout() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Layout);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.setPathMatch = function (pathsArray) {
            return function () {
                _this.props.setPathMatch(pathsArray);
            };
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    Layout.prototype.render = function render() {
        var _props = this.props,
            user = _props.user,
            isMobile = _props.isMobile,
            dictionary = _props.dictionary,
            toggleNav = _props.toggleNav,
            ui = _props.ui;


        if (!user) {
            return _react2.default.createElement(_reactRouterDom.Redirect, { to: {
                    pathname: _constants.Urls.LOGIN
                } });
        }

        var layoutClasses = (0, _classnames2.default)({
            "is-mobile": isMobile,
            "nav-collapsed": ui.navCollapsed
        });

        return _react2.default.createElement(
            _antd.Layout,
            { className: layoutClasses },
            ui.isLoading() && _react2.default.createElement('div', { className: 'page-loader' }),
            _react2.default.createElement(_MenuSection2.default, { dictionary: dictionary,
                currentPathMatch: ui.currentPathMatch,
                collapsed: ui.navCollapsed,
                isMobile: isMobile,
                user: user,
                toggleNav: toggleNav }),
            _react2.default.createElement(
                _antd.Layout,
                null,
                _react2.default.createElement(_HeaderSection2.default, { isMobile: isMobile,
                    navCollapsed: ui.navCollapsed,
                    toggleNav: toggleNav,
                    dictionary: dictionary }),
                _react2.default.createElement(
                    _antd.Layout.Content,
                    { className: 'content-section' },
                    _react2.default.createElement(
                        _reactRouterDom.Switch,
                        null,
                        _react2.default.createElement(_AuthorisedRoute2.default, { path: _constants.Urls.ROLE_VIEW,
                            user: user,
                            permission: _constants.Permissions.ROLE_VIEW,
                            setPathMatch: this.setPathMatch([_constants.Urls.ROLE_VIEW, _constants.Urls.ROLES]),
                            component: _Update2.default }),
                        _react2.default.createElement(_AuthorisedRoute2.default, { path: _constants.Urls.ROLES,
                            user: user,
                            permission: _constants.Permissions.ROLES_VIEW,
                            setPathMatch: this.setPathMatch([_constants.Urls.ROLES]),
                            component: _Listing2.default }),
                        _react2.default.createElement(_AuthorisedRoute2.default, { path: _constants.Urls.ROLES_CREATE,
                            user: user,
                            permission: _constants.Permissions.ROLES_CREATE,
                            setPathMatch: this.setPathMatch([_constants.Urls.ROLES_CREATE, _constants.Urls.ROLES]),
                            component: _Create2.default }),
                        _react2.default.createElement(_AuthorisedRoute2.default, { path: _constants.Urls.USER_VIEW,
                            user: user,
                            permission: _constants.Permissions.USER_VIEW,
                            setPathMatch: this.setPathMatch([_constants.Urls.USER_VIEW, _constants.Urls.USERS]),
                            component: _Update4.default }),
                        _react2.default.createElement(_AuthorisedRoute2.default, { path: _constants.Urls.USERS,
                            user: user,
                            permission: _constants.Permissions.USERS_VIEW,
                            setPathMatch: this.setPathMatch([_constants.Urls.USERS]),
                            component: _Listing4.default }),
                        _react2.default.createElement(_AuthorisedRoute2.default, { path: _constants.Urls.USERS_CREATE,
                            user: user,
                            permission: _constants.Permissions.USERS_CREATE,
                            setPathMatch: this.setPathMatch([_constants.Urls.USERS_CREATE, _constants.Urls.USERS]),
                            component: _Create4.default }),
                        _react2.default.createElement(_AuthorisedRoute2.default, { path: _constants.Urls.CARDHOLDERS,
                            user: user,
                            permission: _constants.Permissions.CARDHOLDERS_VIEW,
                            setPathMatch: this.setPathMatch([_constants.Urls.CARDHOLDERS]),
                            component: _Listing8.default }),
                        _react2.default.createElement(_AuthorisedRoute2.default, { path: _constants.Urls.ACCOUNT,
                            user: user,
                            permission: _constants.Permissions.ACCOUNT_VIEW,
                            setPathMatch: this.setPathMatch([_constants.Urls.ACCOUNT]),
                            component: _account2.default }),
                        _react2.default.createElement(_AuthorisedRoute2.default, { path: _constants.Urls.ACTION_LOG,
                            user: user,
                            permission: _constants.Permissions.ACTION_LOG_VIEW,
                            setPathMatch: this.setPathMatch([_constants.Urls.ACTION_LOG]),
                            component: _actionLog2.default }),
                        _react2.default.createElement(_AuthorisedRoute2.default, { path: _constants.Urls.CUSTOMERS,
                            user: user,
                            permission: _constants.Permissions.CUSTOMERS_VIEW,
                            setPathMatch: this.setPathMatch([_constants.Urls.CUSTOMERS]),
                            component: _Listing6.default }),
                        _react2.default.createElement(_AuthorisedRoute2.default, { path: _constants.Urls.SMARTCARD,
                            user: user,
                            permission: _constants.Permissions.SMARTCARD_VIEW,
                            setPathMatch: this.setPathMatch([_constants.Urls.SMARTCARD]),
                            component: _smartcard2.default })
                    )
                ),
                _react2.default.createElement(_FooterSection2.default, { dictionary: dictionary })
            )
        );
    };

    return Layout;
}(_react2.default.PureComponent);

Layout.propTypes = {
    ui: _propTypes2.default.instanceOf(_UiState2.default).isRequired,
    dictionary: _propTypes2.default.instanceOf(_Dictionary2.default).isRequired,
    history: _propTypes2.default.object.isRequired,
    location: _propTypes2.default.object.isRequired,
    isMobile: _propTypes2.default.bool.isRequired,
    toggleNav: _propTypes2.default.func.isRequired,
    setPathMatch: _propTypes2.default.func.isRequired,
    user: _propTypes2.default.instanceOf(_User2.default)
};


var dispatchToProps = function dispatchToProps(dispatch) {
    return {
        toggleNav: (0, _redux.bindActionCreators)(_UiActions2.default.toggleNav, dispatch),
        setPathMatch: (0, _redux.bindActionCreators)(_UiActions2.default.setPathMatch, dispatch)
    };
};

var getStoresMap = function getStoresMap(state) {
    return {
        user: state.auth.user,
        dictionary: state.dictionary,
        ui: state.ui
    };
};

exports.default = (0, _reactRedux.connect)(getStoresMap, dispatchToProps)(function (props) {
    return _react2.default.createElement(
        _reactMedia2.default,
        { query: '(max-width: 599px)' },
        function (isMobile) {
            return _react2.default.createElement(Layout, (0, _extends3.default)({}, props, { isMobile: isMobile }));
        }
    );
});
module.exports = exports.default;