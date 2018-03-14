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

var _antd = require('antd');

var _rcDrawerMenu = require('rc-drawer-menu');

var _rcDrawerMenu2 = _interopRequireDefault(_rcDrawerMenu);

require('rc-drawer-menu/assets/index.css');

var _reactTransitionGroup = require('react-transition-group');

var _reactRouterDom = require('react-router-dom');

var _ResponsiveRender = require('./components/ResponsiveRender');

var _ResponsiveRender2 = _interopRequireDefault(_ResponsiveRender);

var _MainMenu = require('./components/MainMenu');

var _MainMenu2 = _interopRequireDefault(_MainMenu);

var _Users = require('./pages/Users');

var _Users2 = _interopRequireDefault(_Users);

var _User = require('./pages/User');

var _User2 = _interopRequireDefault(_User);

var _Roles = require('./pages/Roles');

var _Roles2 = _interopRequireDefault(_Roles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = _antd.Layout.Header,
    Content = _antd.Layout.Content,
    Footer = _antd.Layout.Footer,
    Sider = _antd.Layout.Sider;

var Index = function (_React$Component) {
    (0, _inherits3.default)(Index, _React$Component);

    function Index() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
            collapsed: false
        }, _this.onCollapse = function (collapsed) {
            _this.setState({ collapsed: collapsed });
        }, _this.toggle = function () {
            _this.setState({
                collapsed: !_this.state.collapsed
            });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    Index.prototype.render = function render() {
        var _this2 = this;

        return _react2.default.createElement(
            _reactRouterDom.BrowserRouter,
            null,
            _react2.default.createElement(_reactRouterDom.Route, { render: function render(_ref) {
                    var location = _ref.location;
                    return _react2.default.createElement(
                        _antd.Layout,
                        { style: { minHeight: '100vh' } },
                        _react2.default.createElement(
                            _ResponsiveRender2.default,
                            { displayFrom: 'lg' },
                            _react2.default.createElement(
                                Sider,
                                {
                                    breakpoint: 'xl',
                                    collapsible: true,
                                    collapsed: _this2.state.collapsed,
                                    onCollapse: _this2.onCollapse,
                                    trigger: null
                                },
                                _react2.default.createElement('div', { className: !_this2.state.collapsed ? 'logo-big' : 'logo-small' }),
                                _react2.default.createElement(_MainMenu2.default, null)
                            )
                        ),
                        _react2.default.createElement(
                            _ResponsiveRender2.default,
                            { displayTo: 'lg' },
                            _react2.default.createElement(
                                _rcDrawerMenu2.default,
                                {
                                    width: '240px',
                                    open: _this2.state.collapsed,
                                    onMaskClick: function onMaskClick() {
                                        return _this2.onCollapse(false);
                                    },
                                    iconChild: false
                                },
                                _react2.default.createElement('div', { className: 'logo-big' }),
                                _react2.default.createElement(_MainMenu2.default, null)
                            )
                        ),
                        _react2.default.createElement(
                            _antd.Layout,
                            null,
                            _react2.default.createElement(
                                Header,
                                { style: { background: '#fff' } },
                                _react2.default.createElement(_antd.Icon, {
                                    className: 'trigger',
                                    type: _this2.state.collapsed ? 'menu-unfold' : 'menu-fold',
                                    onClick: _this2.toggle
                                })
                            ),
                            _react2.default.createElement(
                                Content,
                                { style: { margin: '0 16px' } },
                                _react2.default.createElement(
                                    _reactTransitionGroup.TransitionGroup,
                                    null,
                                    _react2.default.createElement(
                                        _reactTransitionGroup.CSSTransition,
                                        { key: location.key, classNames: 'fadeInUpSmall', timeout: 300 },
                                        _react2.default.createElement(
                                            _reactRouterDom.Switch,
                                            { location: location },
                                            _react2.default.createElement(_reactRouterDom.Route, { path: '/users/:id', component: _User2.default }),
                                            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/users', component: _Users2.default }),
                                            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/roles', component: _Roles2.default }),
                                            _react2.default.createElement(_reactRouterDom.Route, { render: function render() {
                                                    return _react2.default.createElement(
                                                        'div',
                                                        null,
                                                        'Home'
                                                    );
                                                } })
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                Footer,
                                { style: { textAlign: 'center' } },
                                'Ant Design \xA92016 Created by Ant UED'
                            )
                        )
                    );
                }
            })
        );
    };

    return Index;
}(_react2.default.Component);

exports.default = Index;
module.exports = exports['default'];