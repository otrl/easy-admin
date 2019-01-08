'use strict';

exports.__esModule = true;
exports.default = Menu;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _antd = require('antd');

var _immutable = require('immutable');

var _reactRouterDom = require('react-router-dom');

var _constants = require('../../constants');

var _Dictionary = require('../../records/Dictionary');

var _Dictionary2 = _interopRequireDefault(_Dictionary);

var _User = require('../../records/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Menu(_ref) {
    var dictionary = _ref.dictionary,
        collapsed = _ref.collapsed,
        toggleNav = _ref.toggleNav,
        user = _ref.user,
        currentPathMatch = _ref.currentPathMatch;

    return _react2.default.createElement(
        _antd.Layout.Sider,
        {
            trigger: null,
            collapsible: true,
            collapsed: collapsed,
            breakpoint: 'lg',
            onCollapse: toggleNav,
            className: 'sider'
        },
        _react2.default.createElement(
            _antd.Menu,
            {
                selectedKeys: currentPathMatch.toArray(),
                mode: 'inline'
            },
            user.hasPermission(_constants.Permissions.ACCOUNT_VIEW) && _react2.default.createElement(
                _antd.Menu.Item,
                { key: _constants.Urls.ACCOUNT },
                _react2.default.createElement(
                    _reactRouterDom.NavLink,
                    { to: _constants.Urls.ACCOUNT },
                    _react2.default.createElement(_antd.Icon, { type: 'setting' }),
                    _react2.default.createElement(
                        'span',
                        null,
                        dictionary.getByKey("NAVIGATION_ACCOUNT")
                    )
                )
            ),
            user.hasPermission(_constants.Permissions.USERS_VIEW) && _react2.default.createElement(
                _antd.Menu.Item,
                { key: _constants.Urls.USERS },
                _react2.default.createElement(
                    _reactRouterDom.NavLink,
                    { to: _constants.Urls.USERS },
                    _react2.default.createElement(_antd.Icon, { type: 'user' }),
                    _react2.default.createElement(
                        'span',
                        null,
                        dictionary.getByKey("NAVIGATION_USERS")
                    )
                )
            ),
            user.hasPermission(_constants.Permissions.ROLES_VIEW) && _react2.default.createElement(
                _antd.Menu.Item,
                { key: _constants.Urls.ROLES },
                _react2.default.createElement(
                    _reactRouterDom.NavLink,
                    { to: _constants.Urls.ROLES },
                    _react2.default.createElement(_antd.Icon, { type: 'team' }),
                    _react2.default.createElement(
                        'span',
                        null,
                        dictionary.getByKey("NAVIGATION_ROLES")
                    )
                )
            ),
            user.hasPermission(_constants.Permissions.CARDHOLDERS_VIEW) && _react2.default.createElement(
                _antd.Menu.Item,
                { key: _constants.Urls.CARDHOLDERS },
                _react2.default.createElement(
                    _reactRouterDom.NavLink,
                    { to: _constants.Urls.CARDHOLDERS },
                    _react2.default.createElement(_antd.Icon, { type: 'contacts' }),
                    _react2.default.createElement(
                        'span',
                        null,
                        dictionary.getByKey("NAVIGATION_CARDHOLDERS")
                    )
                )
            ),
            user.hasPermission(_constants.Permissions.CUSTOMERS_VIEW) && _react2.default.createElement(
                _antd.Menu.Item,
                { key: _constants.Urls.CUSTOMERS },
                _react2.default.createElement(
                    _reactRouterDom.NavLink,
                    { to: _constants.Urls.CUSTOMERS },
                    _react2.default.createElement(_antd.Icon, { type: 'contacts' }),
                    _react2.default.createElement(
                        'span',
                        null,
                        dictionary.getByKey("NAVIGATION_CUSTOMERS")
                    )
                )
            ),
            user.hasPermission(_constants.Permissions.ACTION_LOG_VIEW) && _react2.default.createElement(
                _antd.Menu.Item,
                { key: _constants.Urls.ACTION_LOG },
                _react2.default.createElement(
                    _reactRouterDom.NavLink,
                    { to: _constants.Urls.ACTION_LOG },
                    _react2.default.createElement(_antd.Icon, { type: 'eye' }),
                    _react2.default.createElement(
                        'span',
                        null,
                        dictionary.getByKey("NAVIGATION_ACTION_LOG")
                    )
                )
            )
        )
    );
}

Menu.propTypes = {
    dictionary: _propTypes2.default.instanceOf(_Dictionary2.default).isRequired,
    toggleNav: _propTypes2.default.func.isRequired,
    user: _propTypes2.default.instanceOf(_User2.default).isRequired,
    currentPathMatch: _propTypes2.default.instanceOf(_immutable.List),
    collapsed: _propTypes2.default.bool
};

Menu.defaultProps = {
    collapsed: false,
    currentPathMatch: null
};
module.exports = exports.default;