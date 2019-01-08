'use strict';

exports.__esModule = true;
exports.default = HeaderSection;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _antd = require('antd');

var _reactRouterDom = require('react-router-dom');

var _Dictionary = require('../../records/Dictionary');

var _Dictionary2 = _interopRequireDefault(_Dictionary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HeaderSection(_ref) {
    var isMobile = _ref.isMobile,
        navCollapsed = _ref.navCollapsed,
        dictionary = _ref.dictionary,
        toggleNav = _ref.toggleNav;

    return _react2.default.createElement(
        _antd.Layout.Header,
        { className: 'header-section' },
        _react2.default.createElement(_reactRouterDom.Link, { to: '/', className: 'logo' }),
        _react2.default.createElement(_antd.Icon, {
            className: 'menu-trigger',
            type: navCollapsed ? 'menu-unfold' : 'menu-fold',
            onClick: toggleNav
        })
    );
}

HeaderSection.propTypes = {
    dictionary: _propTypes2.default.instanceOf(_Dictionary2.default).isRequired,
    toggleNav: _propTypes2.default.func.isRequired,
    navCollapsed: _propTypes2.default.bool,
    isMobile: _propTypes2.default.bool
};

HeaderSection.defaultProps = {
    navCollapsed: false,
    isMobile: false
};
module.exports = exports.default;