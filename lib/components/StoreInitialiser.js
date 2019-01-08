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

var _reactRedux = require('react-redux');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _redux = require('redux');

var _ConfigActions = require('../actions/ConfigActions');

var _ConfigActions2 = _interopRequireDefault(_ConfigActions);

var _AuthActions = require('../actions/AuthActions');

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _AuthState = require('../records/AuthState');

var _AuthState2 = _interopRequireDefault(_AuthState);

var _Session = require('../records/Session');

var _Session2 = _interopRequireDefault(_Session);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StoreInitialiser = function (_React$PureComponent) {
    (0, _inherits3.default)(StoreInitialiser, _React$PureComponent);

    function StoreInitialiser() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, StoreInitialiser);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.timer = null, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    StoreInitialiser.prototype.componentWillMount = function componentWillMount() {
        var _props = this.props,
            setConfig = _props.setConfig,
            config = _props.config;

        setConfig(config);
    };

    StoreInitialiser.prototype.componentDidMount = function componentDidMount() {
        if (this.props.auth.user) {
            this.setTimer();
        }
    };

    StoreInitialiser.prototype.componentWillReceiveProps = function componentWillReceiveProps(newProps) {
        if (!this.props.auth.user && newProps.auth.user) {
            this.setTimer();
        } else if (this.props.auth.user && !newProps.auth.user) {
            clearInterval(this.timer);
        }
    };

    StoreInitialiser.prototype.setTimer = function setTimer() {
        var _this2 = this;

        this.timer = setInterval(function () {
            var _props2 = _this2.props,
                auth = _props2.auth,
                logout = _props2.logout,
                session = _props2.session;

            if ((0, _moment2.default)().isAfter(session.sessionExpiry)) {
                clearInterval(_this2.timer);
                logout(auth.user);
            }
        }, 1000);
    };

    StoreInitialiser.prototype.render = function render() {
        return _react2.default.createElement(
            _react2.default.Fragment,
            null,
            this.props.children
        );
    };

    return StoreInitialiser;
}(_react2.default.PureComponent);

StoreInitialiser.propTypes = {
    config: _propTypes2.default.any.isRequired,
    auth: _propTypes2.default.instanceOf(_AuthState2.default).isRequired,
    session: _propTypes2.default.instanceOf(_Session2.default).isRequired,
    logout: _propTypes2.default.func.isRequired,
    children: _propTypes2.default.node
};
StoreInitialiser.defaultProps = {
    children: null
};


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        logout: (0, _redux.bindActionCreators)(_AuthActions2.default.logout, dispatch),
        setConfig: (0, _redux.bindActionCreators)(_ConfigActions2.default.setConfig, dispatch)
    };
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        auth: state.auth,
        session: state.session
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(StoreInitialiser);
module.exports = exports.default;