'use strict';

exports.__esModule = true;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _reactHelmet = require('react-helmet');

var _redux = require('redux');

var _reactRouterDom = require('react-router-dom');

var _antd = require('antd');

var _reactRedux = require('react-redux');

var _AuthActions = require('../../actions/AuthActions');

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _constants = require('../../constants');

var _UiState = require('../../records/UiState');

var _UiState2 = _interopRequireDefault(_UiState);

var _User = require('../../records/User');

var _User2 = _interopRequireDefault(_User);

var _Dictionary = require('../../records/Dictionary');

var _Dictionary2 = _interopRequireDefault(_Dictionary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Login = function (_React$PureComponent) {
    (0, _inherits3.default)(Login, _React$PureComponent);

    function Login() {
        var _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Login);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.state = {
            loading: false,
            error: null
        }, _this.handleSubmit = function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(e) {
                var _this$props, form, dictionary;

                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                e.preventDefault();
                                _this$props = _this.props, form = _this$props.form, dictionary = _this$props.dictionary;

                                _this.setState({
                                    loading: true,
                                    error: null
                                });

                                form.validateFieldsAndScroll(function () {
                                    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(errors, values) {
                                        return _regenerator2.default.wrap(function _callee$(_context) {
                                            while (1) {
                                                switch (_context.prev = _context.next) {
                                                    case 0:
                                                        if (errors) {
                                                            _context.next = 11;
                                                            break;
                                                        }

                                                        _context.prev = 1;
                                                        _context.next = 4;
                                                        return _this.props.login(values.email, values.password);

                                                    case 4:
                                                        _context.next = 9;
                                                        break;

                                                    case 6:
                                                        _context.prev = 6;
                                                        _context.t0 = _context['catch'](1);

                                                        if (_context.t0.response && _context.t0.response.data && _context.t0.response.data.error) {
                                                            _this.setState({
                                                                loading: false,
                                                                error: dictionary.getByKey(_context.t0.response.data.error)
                                                            });
                                                        } else {
                                                            _this.setState({
                                                                loading: false,
                                                                error: dictionary.getByKey("AUTH_ERROR_GENERIC")
                                                            });
                                                        }

                                                    case 9:
                                                        _context.next = 12;
                                                        break;

                                                    case 11:
                                                        _this.setState({
                                                            loading: false
                                                        });

                                                    case 12:
                                                    case 'end':
                                                        return _context.stop();
                                                }
                                            }
                                        }, _callee, _this2, [[1, 6]]);
                                    }));

                                    return function (_x2, _x3) {
                                        return _ref2.apply(this, arguments);
                                    };
                                }());

                            case 4:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this2);
            }));

            return function (_x) {
                return _ref.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    Login.prototype.render = function render() {
        var _props = this.props,
            form = _props.form,
            user = _props.user,
            location = _props.location,
            dictionary = _props.dictionary;
        var getFieldDecorator = form.getFieldDecorator;
        var _state = this.state,
            loading = _state.loading,
            error = _state.error;


        if (user) {
            return _react2.default.createElement(_reactRouterDom.Redirect, { push: true, to: location.state ? location.state.from.pathname : _constants.Urls.HOME });
        }

        return _react2.default.createElement(
            _react2.default.Fragment,
            null,
            _react2.default.createElement(
                _reactHelmet.Helmet,
                null,
                _react2.default.createElement(
                    'title',
                    null,
                    dictionary.getByKey("LOGIN_PAGE_TITLE")
                )
            ),
            _react2.default.createElement(
                _antd.Row,
                { type: 'flex', className: 'full-height', justify: 'center', align: 'middle' },
                _react2.default.createElement(
                    _antd.Col,
                    { xs: 22, sm: 16, md: 16, lg: 8 },
                    _react2.default.createElement(
                        _antd.Card,
                        {
                            type: 'inner',
                            title: dictionary.getByKey("LOGIN_FRAME_TITLE")
                        },
                        error && _react2.default.createElement(
                            _react2.default.Fragment,
                            null,
                            _react2.default.createElement(_antd.Alert, { type: 'error', message: error, showIcon: true }),
                            _react2.default.createElement('br', null)
                        ),
                        _react2.default.createElement(
                            _antd.Form,
                            { disabled: loading, onSubmit: this.handleSubmit, className: 'login-form' },
                            _react2.default.createElement(
                                _antd.Form.Item,
                                null,
                                getFieldDecorator('email', {
                                    rules: [{ required: true, message: dictionary.getByKey("LOGIN_EMAIL_REQUIRED") }, { type: "email", message: dictionary.getByKey("LOGIN_EMAIL_INVALID_FORMAT") }]
                                })(_react2.default.createElement(_antd.Input, { size: 'large', prefix: _react2.default.createElement(_antd.Icon, { type: 'user' }),
                                    placeholder: dictionary.getByKey("LOGIN_EMAIL_PLACEHOLDER") }))
                            ),
                            _react2.default.createElement(
                                _antd.Form.Item,
                                null,
                                getFieldDecorator('password', {
                                    rules: [{
                                        required: true,
                                        message: dictionary.getByKey("LOGIN_PASSWORD_REQUIRED")
                                    }]
                                })(_react2.default.createElement(_antd.Input, { size: 'large', prefix: _react2.default.createElement(_antd.Icon, { type: 'lock' }), type: 'password',
                                    placeholder: dictionary.getByKey("LOGIN_PASSWORD_PLACEHOLDER") }))
                            ),
                            _react2.default.createElement(
                                _antd.Button,
                                { disabled: loading, type: 'primary', icon: loading ? "loading" : "login",
                                    htmlType: 'submit' },
                                dictionary.getByKey("LOGIN_BUTTON")
                            ),
                            '\xA0\xA0\xA0',
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: _constants.Urls.REQUEST_PASSWORD_RESET },
                                dictionary.getByKey("LOGIN_PASSWORD_RESET_LINK_TEXT")
                            )
                        )
                    )
                )
            )
        );
    };

    return Login;
}(_react2.default.PureComponent);

Login.propTypes = {
    ui: _propTypes2.default.instanceOf(_UiState2.default).isRequired,
    dictionary: _propTypes2.default.instanceOf(_Dictionary2.default).isRequired,
    login: _propTypes2.default.func.isRequired,
    user: _propTypes2.default.instanceOf(_User2.default),
    history: _propTypes2.default.object.isRequired,
    location: _propTypes2.default.object.isRequired
};
Login.defaultProps = {
    user: null
};


var dispatchToProps = function dispatchToProps(dispatch) {
    return {
        login: (0, _redux.bindActionCreators)(_AuthActions2.default.login, dispatch)
    };
};

var getStoresMap = function getStoresMap(state) {
    return {
        user: state.auth.user,
        dictionary: state.dictionary,
        ui: state.ui
    };
};

var WrappedLogin = _antd.Form.create()(Login);

exports.default = (0, _reactRedux.connect)(getStoresMap, dispatchToProps)(WrappedLogin);
module.exports = exports.default;