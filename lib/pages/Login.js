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

var _reactGoogleLogin = require('react-google-login');

var _reactGoogleLogin2 = _interopRequireDefault(_reactGoogleLogin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Login = function (_React$Component) {
    (0, _inherits3.default)(Login, _React$Component);

    function Login() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Login);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.responseGoogle = function (response) {
            console.log(response);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    Login.prototype.render = function render() {
        return _react2.default.createElement(
            'div',
            { className: 'vertical-center-wrapper' },
            _react2.default.createElement(
                'div',
                { className: 'vertical-center-inner' },
                _react2.default.createElement(
                    _antd.Row,
                    { type: 'flex', align: 'middle' },
                    _react2.default.createElement(
                        _antd.Col,
                        { xs: { span: 22, offset: 1 }, sm: { span: 12, offset: 6 }, lg: { span: 8, offset: 8 } },
                        _react2.default.createElement(
                            _antd.Card,
                            { title: 'Login' },
                            _react2.default.createElement(
                                _reactGoogleLogin2.default,
                                {
                                    className: 'ant-btn ant-btn-primary ant-btn-lg',
                                    style: { width: '100%' },
                                    clientId: '620481000705-nqn5klolm8mjb10ls0gihsbvq11gq6sr.apps.googleusercontent.com',
                                    buttonText: 'Login',
                                    onSuccess: this.responseGoogle,
                                    onFailure: this.responseGoogle
                                },
                                _react2.default.createElement(_antd.Icon, { type: 'google' }),
                                ' Login with your Gmail account'
                            )
                        )
                    )
                )
            )
        );
    };

    return Login;
}(_react2.default.Component);

exports.default = Login;
module.exports = exports['default'];