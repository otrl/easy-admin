'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _antd = require('antd');

var _Dictionary = require('../../records/Dictionary');

var _Dictionary2 = _interopRequireDefault(_Dictionary);

var _User = require('../../records/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Form = function (_React$PureComponent) {
    (0, _inherits3.default)(Form, _React$PureComponent);

    function Form() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Form);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.onSubmit = function (e) {
            e.preventDefault();
            _this.props.form.validateFieldsAndScroll(function (err, values) {
                if (!err) {
                    _this.props.onSubmit({
                        email: values.accountEmail,
                        first_name: values.accountFirstName,
                        last_name: values.accountLastName,
                        password: values.accountPassword
                    });
                }
            });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    Form.prototype.render = function render() {
        var _props = this.props,
            dictionary = _props.dictionary,
            form = _props.form,
            loading = _props.loading,
            disabled = _props.disabled;

        var formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 }
            }
        };

        var tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0
                },
                sm: {
                    span: 16,
                    offset: 8
                }
            }
        };

        return _react2.default.createElement(
            _antd.Form,
            { onSubmit: this.onSubmit },
            _react2.default.createElement(
                _antd.Form.Item,
                (0, _extends3.default)({}, formItemLayout, {
                    label: dictionary.getByKey("ACCOUNT_FORM_EMAIL_FIELD_LABEL")
                }),
                form.getFieldDecorator('accountEmail', {
                    rules: [{
                        required: true, message: dictionary.getByKey("ACCOUNT_FORM_EMAIL_FIELD_REQUIRED")
                    }, {
                        type: "string",
                        max: 255,
                        message: dictionary.getByKey("ACCOUNT_FORM_EMAIL_FIELD_INVALID_FORMAT")
                    }, {
                        type: "email", message: dictionary.getByKey("ACCOUNT_FORM_EMAIL_FIELD_INVALID_FORMAT")
                    }]
                })(_react2.default.createElement(_antd.Input, { disabled: disabled }))
            ),
            _react2.default.createElement(
                _antd.Form.Item,
                (0, _extends3.default)({}, formItemLayout, {
                    label: dictionary.getByKey("ACCOUNT_FORM_FIRST_NAME_FIELD_LABEL")
                }),
                form.getFieldDecorator('accountFirstName', {
                    rules: [{
                        required: true, message: dictionary.getByKey("ACCOUNT_FORM_FIRST_NAME_FIELD_REQUIRED")
                    }, {
                        type: "string",
                        min: 2,
                        max: 255,
                        message: dictionary.getByKey("ACCOUNT_FORM_FIRST_NAME_FIELD_INVALID_FORMAT")
                    }]
                })(_react2.default.createElement(_antd.Input, { disabled: disabled }))
            ),
            _react2.default.createElement(
                _antd.Form.Item,
                (0, _extends3.default)({}, formItemLayout, {
                    label: dictionary.getByKey("ACCOUNT_FORM_LAST_NAME_FIELD_LABEL")
                }),
                form.getFieldDecorator('accountLastName', {
                    rules: [{
                        required: true, message: dictionary.getByKey("ACCOUNT_FORM_LAST_NAME_FIELD_REQUIRED")
                    }, {
                        type: "string",
                        min: 2,
                        max: 255,
                        message: dictionary.getByKey("ACCOUNT_FORM_LAST_NAME_FIELD_INVALID_FORMAT")
                    }]
                })(_react2.default.createElement(_antd.Input, { disabled: disabled }))
            ),
            _react2.default.createElement(
                _antd.Form.Item,
                (0, _extends3.default)({}, formItemLayout, {
                    label: dictionary.getByKey("ACCOUNT_FORM_PASSWORD_FIELD_LABEL") }),
                form.getFieldDecorator("accountPassword", {
                    rules: [{ type: "string", min: 8, max: 100, message: dictionary.getByKey("ACCOUNT_FORM_PASSWORD_INVALID_FORMAT") }, {
                        validator: function validator(rule, value, callback) {
                            if (value) {
                                form.validateFields(["passwordConfirmation"], { force: true });
                            }
                            callback();
                        }
                    }]
                })(_react2.default.createElement(_antd.Input, { type: 'password', disabled: disabled }))
            ),
            _react2.default.createElement(
                _antd.Form.Item,
                (0, _extends3.default)({}, formItemLayout, {
                    label: dictionary.getByKey("ACCOUNT_FORM_PASSWORD_CONFIRMATION_FIELD_LABEL") }),
                form.getFieldDecorator("accountPasswordConfirmation", {
                    rules: [{
                        validator: function validator(rule, value, callback) {
                            if (value && value !== form.getFieldValue("accountPassword")) {
                                callback(dictionary.getByKey("ACCOUNT_FORM_PASSWORD_CONFIRMATION_MISMATCH"));
                            } else {
                                callback();
                            }
                        }
                    }]
                })(_react2.default.createElement(_antd.Input, { type: 'password', disabled: disabled }))
            ),
            _react2.default.createElement(
                _antd.Form.Item,
                tailFormItemLayout,
                _react2.default.createElement(
                    _antd.Button,
                    { type: 'primary', loading: loading, disabled: disabled, htmlType: 'submit',
                        icon: 'save' },
                    dictionary.getByKey("ACCOUNT_FORM_SUBMIT")
                )
            )
        );
    };

    return Form;
}(_react2.default.PureComponent);

Form.propTypes = {
    dictionary: _propTypes2.default.instanceOf(_Dictionary2.default).isRequired,
    onSubmit: _propTypes2.default.func.isRequired,
    loading: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool,
    user: _propTypes2.default.instanceOf(_User2.default)
};
Form.defaultProps = {
    loading: false,
    disabled: false,
    user: null
};
exports.default = _antd.Form.create({
    mapPropsToFields: function mapPropsToFields(_ref) {
        var user = _ref.user;

        if (user) {
            return {
                accountEmail: _antd.Form.createFormField({
                    value: user.email
                }),
                accountFirstName: _antd.Form.createFormField({
                    value: user.first_name
                }),
                accountLastName: _antd.Form.createFormField({
                    value: user.last_name
                }),
                accountPassword: _antd.Form.createFormField({
                    value: ''
                }),
                accountPasswordConfirmation: _antd.Form.createFormField({
                    value: ''
                })
            };
        }

        return null;
    }
})(Form);
module.exports = exports.default;