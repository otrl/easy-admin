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

var User = function (_React$Component) {
    (0, _inherits3.default)(User, _React$Component);

    function User() {
        (0, _classCallCheck3.default)(this, User);
        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
    }

    User.prototype.render = function render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'h1',
                null,
                'User'
            ),
            _react2.default.createElement(
                _antd.Breadcrumb,
                { style: { margin: '16px 0' } },
                _react2.default.createElement(
                    _antd.Breadcrumb.Item,
                    null,
                    'Users'
                ),
                _react2.default.createElement(
                    _antd.Breadcrumb.Item,
                    null,
                    'Bill'
                )
            ),
            _react2.default.createElement('div', { className: 'content-section' })
        );
    };

    return User;
}(_react2.default.Component);

exports.default = User;
module.exports = exports['default'];