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

var _redux = require('redux');

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

var _AuthActions = require('../../actions/AuthActions');

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _constants = require('../../constants');

var _User = require('../../records/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Logout = function (_React$PureComponent) {
    (0, _inherits3.default)(Logout, _React$PureComponent);

    function Logout() {
        (0, _classCallCheck3.default)(this, Logout);
        return (0, _possibleConstructorReturn3.default)(this, _React$PureComponent.apply(this, arguments));
    }

    Logout.prototype.componentWillMount = function componentWillMount() {
        var _props = this.props,
            user = _props.user,
            logout = _props.logout;

        logout(user);
    };

    Logout.prototype.render = function render() {
        return _react2.default.createElement(_reactRouterDom.Redirect, { push: true, to: _constants.Urls.LOGIN });
    };

    return Logout;
}(_react2.default.PureComponent);

Logout.propTypes = {
    logout: _propTypes2.default.func.isRequired,
    user: _propTypes2.default.instanceOf(_User2.default)
};
Logout.defaultProps = {
    user: null
};


var dispatchToProps = function dispatchToProps(dispatch) {
    return {
        logout: (0, _redux.bindActionCreators)(_AuthActions2.default.logout, dispatch)
    };
};

var getStoresMap = function getStoresMap(state) {
    return {
        user: state.auth.user
    };
};

exports.default = (0, _reactRedux.connect)(getStoresMap, dispatchToProps)(Logout);
module.exports = exports.default;