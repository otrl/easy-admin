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

var _react3 = require('redux-persist/integration/react');

var _reactRouterDom = require('react-router-dom');

var _momentTimezone = require('moment-timezone');

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

var _connectedReactRouter = require('connected-react-router');

var _store = require('./store');

var _constants = require('./constants');

var _StoreInitialiser = require('./components/StoreInitialiser');

var _StoreInitialiser2 = _interopRequireDefault(_StoreInitialiser);

var _login = require('./components/login');

var _login2 = _interopRequireDefault(_login);

var _paswordResetRequest = require('./components/pasword-reset-request');

var _paswordResetRequest2 = _interopRequireDefault(_paswordResetRequest);

var _paswordReset = require('./components/pasword-reset');

var _paswordReset2 = _interopRequireDefault(_paswordReset);

var _Layout = require('./components/layout/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _defaultConfig = require('./default-config');

var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_momentTimezone2.default.tz.setDefault('Europe/London');
_momentTimezone2.default.relativeTimeThreshold('m', 59);

var Index = function (_React$Component) {
    (0, _inherits3.default)(Index, _React$Component);

    function Index() {
        (0, _classCallCheck3.default)(this, Index);
        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
    }

    Index.prototype.render = function render() {
        return _react2.default.createElement(
            _reactRedux.Provider,
            { store: _store.store },
            _react2.default.createElement(
                _react3.PersistGate,
                { loading: _react2.default.createElement(
                        'p',
                        null,
                        'Loading....'
                    ), persistor: _store.persistor },
                _react2.default.createElement(
                    _StoreInitialiser2.default,
                    { store: _store.store, config: this.props.config },
                    _react2.default.createElement(
                        _connectedReactRouter.ConnectedRouter,
                        { history: _store.history },
                        _react2.default.createElement(
                            _reactRouterDom.Switch,
                            null,
                            _react2.default.createElement(_reactRouterDom.Route, { path: _constants.Urls.LOGIN, component: _login2.default }),
                            _react2.default.createElement(_reactRouterDom.Route, { path: _constants.Urls.REQUEST_PASSWORD_RESET, component: _paswordResetRequest2.default }),
                            _react2.default.createElement(_reactRouterDom.Route, { path: _constants.Urls.RESET_PASSWORD, component: _paswordReset2.default }),
                            _react2.default.createElement(_reactRouterDom.Route, { path: '/', component: _Layout2.default })
                        )
                    )
                )
            )
        );
    };

    return Index;
}(_react2.default.Component);

Index.propTypes = {
    config: _propTypes2.default.shape(_defaultConfig.defaultConfigShape)
};
Index.defaultProps = {
    config: _defaultConfig2.default
};
exports.default = Index;
module.exports = exports.default;