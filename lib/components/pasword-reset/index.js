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

var _PasswordResetActions = require('../../actions/PasswordResetActions');

var _PasswordResetActions2 = _interopRequireDefault(_PasswordResetActions);

var _constants = require('../../constants');

var _User = require('../../records/User');

var _User2 = _interopRequireDefault(_User);

var _Dictionary = require('../../records/Dictionary');

var _Dictionary2 = _interopRequireDefault(_Dictionary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PasswordReset = function (_React$PureComponent) {
    (0, _inherits3.default)(PasswordReset, _React$PureComponent);

    function PasswordReset() {
        var _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, PasswordReset);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.state = {
            loading: false
        }, _this.handleSubmit = function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(e) {
                var _this$props, form, history, dictionary, match;

                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                e.preventDefault();
                                _this$props = _this.props, form = _this$props.form, history = _this$props.history, dictionary = _this$props.dictionary, match = _this$props.match;

                                _this.setState({
                                    loading: true
                                });

                                form.validateFieldsAndScroll(function () {
                                    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(errors, values) {
                                        return _regenerator2.default.wrap(function _callee$(_context) {
                                            while (1) {
                                                switch (_context.prev = _context.next) {
                                                    case 0:
                                                        if (errors) {
                                                            _context.next = 15;
                                                            break;
                                                        }

                                                        _context.prev = 1;
                                                        _context.next = 4;
                                                        return _this.props.resetPassword(values.password, match.params.token);

                                                    case 4:
                                                        _antd.notification.success({
                                                            message: dictionary.getByKey("PASSWORD_RESET_SUCCESS_NOTIFICATION_TITLE"),
                                                            description: dictionary.getByKey("PASSWORD_RESET_SUCCESS_NOTIFICATION_DESCRIPTION"),
                                                            duration: 7
                                                        });
                                                        history.push({ pathname: _constants.Urls.LOGIN });
                                                        _context.next = 13;
                                                        break;

                                                    case 8:
                                                        _context.prev = 8;
                                                        _context.t0 = _context['catch'](1);

                                                        console.log(_context.t0.status);
                                                        _antd.notification.error({
                                                            message: dictionary.getByKey("PASSWORD_RESET_ERROR_NOTIFICATION_TITLE"),
                                                            description: dictionary.getByKey("PASSWORD_RESET_ERROR_NOTIFICATION_DESCRIPTION"),
                                                            duration: 12
                                                        });
                                                        _this.setState({
                                                            loading: false
                                                        });

                                                    case 13:
                                                        _context.next = 16;
                                                        break;

                                                    case 15:
                                                        _this.setState({
                                                            loading: false
                                                        });

                                                    case 16:
                                                    case 'end':
                                                        return _context.stop();
                                                }
                                            }
                                        }, _callee, _this2, [[1, 8]]);
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

    PasswordReset.prototype.render = function render() {
        var _props = this.props,
            form = _props.form,
            user = _props.user,
            dictionary = _props.dictionary;
        var getFieldDecorator = form.getFieldDecorator;
        var loading = this.state.loading;


        if (user) {
            return _react2.default.createElement(_reactRouterDom.Redirect, { push: true, to: _constants.Urls.HOME });
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
                    dictionary.getByKey("PASSWORD_RESET_PAGE_TITLE")
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
                            title: dictionary.getByKey("PASSWORD_RESET_FRAME_TITLE")
                        },
                        _react2.default.createElement(
                            _antd.Form,
                            { disabled: loading, onSubmit: this.handleSubmit, className: 'login-form' },
                            _react2.default.createElement(
                                _antd.Form.Item,
                                null,
                                getFieldDecorator('password', {
                                    rules: [{ required: true, message: dictionary.getByKey("PASSWORD_RESET_PASSWORD_REQUIRED") }, { type: "string", min: 8, max: 100, message: dictionary.getByKey("PASSWORD_RESET_PASSWORD_INVALID_FORMAT") }, {
                                        validator: function validator(rule, value, callback) {
                                            if (value) {
                                                form.validateFields(["passwordConfirmation"], { force: true });
                                            }
                                            callback();
                                        }
                                    }]
                                })(_react2.default.createElement(_antd.Input, { size: 'large', type: 'password', prefix: _react2.default.createElement(_antd.Icon, { type: 'ellipsis' }),
                                    placeholder: dictionary.getByKey("PASSWORD_RESET_PASSWORD_PLACEHOLDER") }))
                            ),
                            _react2.default.createElement(
                                _antd.Form.Item,
                                null,
                                getFieldDecorator('passwordConfirmation', {
                                    rules: [{ required: true, message: dictionary.getByKey("PASSWORD_RESET_PASSWORD_CONFIRMATION_REQUIRED") }, {
                                        validator: function validator(rule, value, callback) {
                                            if (value && value !== form.getFieldValue("password")) {
                                                callback(dictionary.getByKey("PASSWORD_RESET_PASSWORD_CONFIRMATION_MISMATCH"));
                                            } else {
                                                callback();
                                            }
                                        }
                                    }]
                                })(_react2.default.createElement(_antd.Input, { size: 'large', type: 'password', prefix: _react2.default.createElement(_antd.Icon, { type: 'ellipsis' }),
                                    placeholder: dictionary.getByKey("PASSWORD_RESET_PASSWORD_CONFIRMATION_PLACEHOLDER") }))
                            ),
                            _react2.default.createElement(
                                _antd.Button,
                                { disabled: loading, type: 'primary', icon: loading ? "loading" : "unlock",
                                    htmlType: 'submit' },
                                dictionary.getByKey("PASSWORD_RESET_BUTTON")
                            ),
                            '\xA0\xA0\xA0',
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: _constants.Urls.LOGIN },
                                dictionary.getByKey("PASSWORD_RESET_BACK_LINK")
                            )
                        )
                    )
                )
            )
        );
    };

    return PasswordReset;
}(_react2.default.PureComponent);

PasswordReset.propTypes = {
    dictionary: _propTypes2.default.instanceOf(_Dictionary2.default).isRequired,
    resetPassword: _propTypes2.default.func.isRequired,
    user: _propTypes2.default.instanceOf(_User2.default),
    history: _propTypes2.default.object.isRequired
};
PasswordReset.defaultProps = {
    user: null
};


var dispatchToProps = function dispatchToProps(dispatch) {
    return {
        resetPassword: (0, _redux.bindActionCreators)(_PasswordResetActions2.default.resetPassword, dispatch)
    };
};

var getStoresMap = function getStoresMap(state) {
    return {
        user: state.auth.user,
        dictionary: state.dictionary
    };
};

var WrappedPasswordReset = _antd.Form.create()(PasswordReset);

exports.default = (0, _reactRedux.connect)(getStoresMap, dispatchToProps)(WrappedPasswordReset);
module.exports = exports.default;