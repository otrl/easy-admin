"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function (_React$Component) {
    (0, _inherits3.default)(Home, _React$Component);

    function Home() {
        (0, _classCallCheck3.default)(this, Home);
        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
    }

    Home.prototype.render = function render() {
        return _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
                "h1",
                null,
                "Home"
            ),
            _react2.default.createElement(
                "div",
                { className: "content-section" },
                "Home page dashboard"
            )
        );
    };

    return Home;
}(_react2.default.Component);

exports.default = Home;
module.exports = exports["default"];