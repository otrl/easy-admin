'use strict';

exports.__esModule = true;
exports.default = HeaderSection;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _antd = require('antd');

var _reactRouterDom = require('react-router-dom');

var _constants = require('../../constants');

var _Dictionary = require('../../records/Dictionary');

var _Dictionary2 = _interopRequireDefault(_Dictionary);

var _User = require('../../records/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HeaderSection(_ref) {
    var isMobile = _ref.isMobile,
        navCollapsed = _ref.navCollapsed,
        dictionary = _ref.dictionary,
        toggleNav = _ref.toggleNav,
        user = _ref.user;

    return _react2.default.createElement(
        _antd.Layout.Header,
        { className: 'header-section' },
        _react2.default.createElement(_reactRouterDom.Link, { to: '/', className: 'logo' }),
        _react2.default.createElement(_antd.Icon, {
            className: 'menu-trigger',
            type: navCollapsed ? 'menu-unfold' : 'menu-fold',
            onClick: toggleNav
        }),
        _react2.default.createElement(
            'div',
            { className: 'header-section-right-menu' },
            _react2.default.createElement(
                _antd.Menu,
                { mode: 'horizontal', selectable: false },
                _react2.default.createElement(
                    _antd.Menu.SubMenu,
                    { title: _react2.default.createElement(
                            'span',
                            { className: 'submenu-title-wrapper' },
                            _react2.default.createElement(_antd.Icon, { type: 'user' }),
                            dictionary.getByKey("HEADER_GREET_USER", { name: user.first_name })
                        ) },
                    user.hasPermission(_constants.Permissions.ACCOUNT_VIEW) && _react2.default.createElement(
                        _antd.Menu.Item,
                        { key: _constants.Urls.ACCOUNT },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: _constants.Urls.ACCOUNT },
                            _react2.default.createElement(_antd.Icon, { type: 'setting' }),
                            _react2.default.createElement(
                                'span',
                                null,
                                dictionary.getByKey("NAVIGATION_ACCOUNT")
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _antd.Menu.Item,
                        null,
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: _constants.Urls.LOGOUT },
                            _react2.default.createElement(_antd.Icon, { type: 'poweroff' }),
                            _react2.default.createElement(
                                'span',
                                null,
                                dictionary.getByKey("NAVIGATION_LOGOUT")
                            )
                        )
                    )
                )
            )
        )
    );
}

HeaderSection.propTypes = {
    dictionary: _propTypes2.default.instanceOf(_Dictionary2.default).isRequired,
    toggleNav: _propTypes2.default.func.isRequired,
    user: _propTypes2.default.instanceOf(_User2.default).isRequired,
    navCollapsed: _propTypes2.default.bool,
    isMobile: _propTypes2.default.bool
};

HeaderSection.defaultProps = {
    navCollapsed: false,
    isMobile: false
};
module.exports = exports.default;