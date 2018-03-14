'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubMenu = _antd.Menu.SubMenu;

function MainMenu(_ref) {
    var location = _ref.location;

    return _react2.default.createElement(
        _antd.Menu,
        { theme: 'dark', mode: 'inline', selectedKeys: [location.pathname] },
        _react2.default.createElement(
            _antd.Menu.Item,
            { key: '/' },
            _react2.default.createElement(
                _reactRouterDom.NavLink,
                { to: '/' },
                _react2.default.createElement(_antd.Icon, { type: 'pie-chart' }),
                _react2.default.createElement(
                    'span',
                    null,
                    'Home'
                )
            )
        ),
        _react2.default.createElement(
            SubMenu,
            {
                key: 'sub0',
                title: _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement(_antd.Icon, { type: 'user' }),
                    _react2.default.createElement(
                        'span',
                        null,
                        'User'
                    )
                )
            },
            _react2.default.createElement(
                _antd.Menu.Item,
                { key: '/users' },
                _react2.default.createElement(
                    _reactRouterDom.NavLink,
                    { to: '/users' },
                    _react2.default.createElement(_antd.Icon, { type: 'user' }),
                    _react2.default.createElement(
                        'span',
                        null,
                        'Users'
                    )
                )
            ),
            _react2.default.createElement(
                _antd.Menu.Item,
                { key: '/roles' },
                _react2.default.createElement(
                    _reactRouterDom.NavLink,
                    { to: '/roles' },
                    _react2.default.createElement(_antd.Icon, { type: 'user' }),
                    _react2.default.createElement(
                        'span',
                        null,
                        'Roles'
                    )
                )
            )
        )
    );
}

exports.default = (0, _reactRouterDom.withRouter)(MainMenu);
module.exports = exports['default'];