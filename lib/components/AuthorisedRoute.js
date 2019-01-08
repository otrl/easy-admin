'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _reactRouterDom = require('react-router-dom');

var _User = require('../records/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrivateRoute = function (_React$PureComponent) {
    (0, _inherits3.default)(PrivateRoute, _React$PureComponent);

    function PrivateRoute() {
        (0, _classCallCheck3.default)(this, PrivateRoute);
        return (0, _possibleConstructorReturn3.default)(this, _React$PureComponent.apply(this, arguments));
    }

    PrivateRoute.prototype.componentDidMount = function componentDidMount() {
        var _this2 = this;

        setTimeout(function () {
            return _this2.props.setPathMatch();
        }, 0);
    };

    PrivateRoute.prototype.componentWillReceiveProps = function componentWillReceiveProps(newProps) {
        var setPathMatch = newProps.setPathMatch,
            location = newProps.location;

        if (this.props.location.pathname !== location.pathname) {
            setTimeout(function () {
                return setPathMatch();
            }, 0);
        }
    };

    PrivateRoute.prototype.render = function render() {
        var _props = this.props,
            user = _props.user,
            permission = _props.permission,
            Component = _props.component,
            rest = (0, _objectWithoutProperties3.default)(_props, ['user', 'permission', 'component']);

        var isAuthorised = user && user.hasPermission(permission);
        return _react2.default.createElement(_reactRouterDom.Route, (0, _extends3.default)({}, rest, {
            render: function render(props) {
                if (isAuthorised) {
                    return _react2.default.createElement(Component, props);
                } else {
                    return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
                }
            }
        }));
    };

    return PrivateRoute;
}(_react2.default.PureComponent);

PrivateRoute.propTypes = {
    setPathMatch: _propTypes2.default.func.isRequired,
    permission: _propTypes2.default.string.isRequired,
    user: _propTypes2.default.instanceOf(_User2.default).isRequired
};
exports.default = PrivateRoute;
module.exports = exports.default;