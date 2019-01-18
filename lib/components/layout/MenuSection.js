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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _antd = require('antd');

var _immutable = require('immutable');

var _Dictionary = require('../../records/Dictionary');

var _Dictionary2 = _interopRequireDefault(_Dictionary);

var _User = require('../../records/User');

var _User2 = _interopRequireDefault(_User);

var _defaultConfig = require('../../default-config');

var _Menu = require('./Menu');

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuSection = function (_React$PureComponent) {
    (0, _inherits3.default)(MenuSection, _React$PureComponent);

    function MenuSection() {
        (0, _classCallCheck3.default)(this, MenuSection);
        return (0, _possibleConstructorReturn3.default)(this, _React$PureComponent.apply(this, arguments));
    }

    MenuSection.prototype.render = function render() {
        var _props = this.props,
            dictionary = _props.dictionary,
            collapsed = _props.collapsed,
            isMobile = _props.isMobile,
            toggleNav = _props.toggleNav,
            currentPathMatch = _props.currentPathMatch,
            user = _props.user,
            appTree = _props.appTree;

        return isMobile ? _react2.default.createElement(
            _antd.Drawer,
            { visible: !collapsed, placement: 'left', onClose: toggleNav, style: { padding: 0, height: '100vh' } },
            _react2.default.createElement(_Menu2.default, { dictionary: dictionary,
                toggleNav: toggleNav,
                appTree: appTree,
                user: user,
                currentPathMatch: currentPathMatch,
                collapsed: isMobile ? false : collapsed })
        ) : _react2.default.createElement(_Menu2.default, { dictionary: dictionary,
            toggleNav: toggleNav,
            appTree: appTree,
            user: user,
            currentPathMatch: currentPathMatch,
            collapsed: collapsed });
    };

    return MenuSection;
}(_react2.default.PureComponent);

MenuSection.propTypes = {
    dictionary: _propTypes2.default.instanceOf(_Dictionary2.default),
    collapsed: _propTypes2.default.bool.isRequired,
    isMobile: _propTypes2.default.bool.isRequired,
    toggleNav: _propTypes2.default.func.isRequired,
    appTree: _defaultConfig.defaultConfigShape.appTree,
    currentPathMatch: _propTypes2.default.instanceOf(_immutable.List),
    user: _propTypes2.default.instanceOf(_User2.default).isRequired
};
MenuSection.defaultProps = {
    currentPathMatch: null,
    appTree: []
};
exports.default = MenuSection;
module.exports = exports.default;