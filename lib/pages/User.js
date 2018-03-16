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

var _UserForm = require('../components/forms/UserForm');

var _UserForm2 = _interopRequireDefault(_UserForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = function (_React$Component) {
    (0, _inherits3.default)(User, _React$Component);

    function User() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, User);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleSubmit = function (e) {
            e.preventDefault();
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
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
            _react2.default.createElement(
                'div',
                { className: 'content-section' },
                _react2.default.createElement(_UserForm2.default, null)
            )
        );
    };

    return User;
}(_react2.default.Component);

exports.default = User;
module.exports = exports['default'];