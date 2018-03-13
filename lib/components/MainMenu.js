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
        ),
        _react2.default.createElement(
            SubMenu,
            {
                key: 'sub1',
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
                { key: '3' },
                'Tom'
            ),
            _react2.default.createElement(
                _antd.Menu.Item,
                { key: '4' },
                'Bill'
            ),
            _react2.default.createElement(
                _antd.Menu.Item,
                { key: '5' },
                'Alex'
            )
        ),
        _react2.default.createElement(
            SubMenu,
            {
                key: 'sub2',
                title: _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement(_antd.Icon, { type: 'team' }),
                    _react2.default.createElement(
                        'span',
                        null,
                        'Team'
                    )
                )
            },
            _react2.default.createElement(
                _antd.Menu.Item,
                { key: '6' },
                'Team 1'
            ),
            _react2.default.createElement(
                _antd.Menu.Item,
                { key: '8' },
                'Team 2'
            )
        ),
        _react2.default.createElement(
            _antd.Menu.Item,
            { key: '9' },
            _react2.default.createElement(_antd.Icon, { type: 'file' }),
            _react2.default.createElement(
                'span',
                null,
                'File'
            )
        )
    );
}

exports.default = (0, _reactRouterDom.withRouter)(MainMenu);
module.exports = exports['default'];