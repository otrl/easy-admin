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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Roles = function (_React$Component) {
    (0, _inherits3.default)(Roles, _React$Component);

    function Roles() {
        (0, _classCallCheck3.default)(this, Roles);
        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
    }

    Roles.prototype.render = function render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                _antd.Breadcrumb,
                { style: { margin: '16px 0' } },
                _react2.default.createElement(
                    _antd.Breadcrumb.Item,
                    null,
                    'Roles'
                ),
                _react2.default.createElement(
                    _antd.Breadcrumb.Item,
                    null,
                    'Admin'
                )
            ),
            _react2.default.createElement(
                'div',
                { style: { padding: 24, background: '#fff' } },
                'Admin rums.'
            )
        );
    };

    return Roles;
}(_react2.default.Component);

exports.default = Roles;
module.exports = exports['default'];