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

var Header = _antd.Layout.Header,
    Footer = _antd.Layout.Footer,
    Sider = _antd.Layout.Sider,
    Content = _antd.Layout.Content;

var User = function (_React$Component) {
    (0, _inherits3.default)(User, _React$Component);

    function User() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, User);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.text = 'something random', _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    User.prototype.blabla = function blabla() {
        return this.text + 'suppppp?';
    };

    User.prototype.render = function render() {
        return _react2.default.createElement(
            _antd.Layout,
            null,
            _react2.default.createElement(
                Sider,
                null,
                'Sider'
            ),
            _react2.default.createElement(
                _antd.Layout,
                null,
                _react2.default.createElement(
                    Header,
                    null,
                    'Header'
                ),
                _react2.default.createElement(
                    Content,
                    null,
                    'Content'
                ),
                _react2.default.createElement(
                    Footer,
                    null,
                    'Footer'
                )
            )
        );
    };

    return User;
}(_react2.default.Component);

exports.default = User;
module.exports = exports['default'];