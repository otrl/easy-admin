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

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormItem = _antd.Form.Item;
var Option = _antd.Select.Option;
var AutoCompleteOption = _antd.AutoComplete.Option;

var residences = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
            value: 'xihu',
            label: 'West Lake'
        }]
    }]
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men'
        }]
    }]
}];

var UserForm = function (_React$Component) {
    (0, _inherits3.default)(UserForm, _React$Component);

    function UserForm() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, UserForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
            confirmDirty: false,
            autoCompleteResult: []
        }, _this.handleSubmit = function (e) {
            e.preventDefault();
            _this.props.form.validateFieldsAndScroll(function (err, values) {
                if (!err) {
                    console.log('Received values of form: ', values);
                }
            });
        }, _this.handleConfirmBlur = function (e) {
            var value = e.target.value;
            _this.setState({ confirmDirty: _this.state.confirmDirty || !!value });
        }, _this.compareToFirstPassword = function (rule, value, callback) {
            var form = _this.props.form;
            if (value && value !== form.getFieldValue('password')) {
                callback('Two passwords that you enter is inconsistent!');
            } else {
                callback();
            }
        }, _this.validateToNextPassword = function (rule, value, callback) {
            var form = _this.props.form;
            if (value && _this.state.confirmDirty) {
                form.validateFields(['confirm'], { force: true });
            }
            callback();
        }, _this.handleWebsiteChange = function (value) {
            var autoCompleteResult = void 0;
            if (!value) {
                autoCompleteResult = [];
            } else {
                autoCompleteResult = ['.com', '.org', '.net'].map(function (domain) {
                    return '' + value + domain;
                });
            }
            _this.setState({ autoCompleteResult: autoCompleteResult });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    UserForm.prototype.render = function render() {
        var getFieldDecorator = this.props.form.getFieldDecorator;
        var autoCompleteResult = this.state.autoCompleteResult;


        var formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 12 }
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
                    offset: 6
                }
            }
        };
        var prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86'
        })(_react2.default.createElement(
            _antd.Select,
            { style: { width: 70 } },
            _react2.default.createElement(
                Option,
                { value: '86' },
                '+86'
            ),
            _react2.default.createElement(
                Option,
                { value: '87' },
                '+87'
            )
        ));

        var websiteOptions = autoCompleteResult.map(function (website) {
            return _react2.default.createElement(
                AutoCompleteOption,
                { key: website },
                website
            );
        });

        return _react2.default.createElement(
            _antd.Form,
            { onSubmit: this.handleSubmit },
            _react2.default.createElement(
                FormItem,
                (0, _extends3.default)({}, formItemLayout, {
                    label: 'E-mail'
                }),
                getFieldDecorator('email', {
                    rules: [{
                        type: 'email', message: 'The input is not valid E-mail!'
                    }, {
                        required: true, message: 'Please input your E-mail!'
                    }]
                })(_react2.default.createElement(_antd.Input, null))
            ),
            _react2.default.createElement(
                FormItem,
                (0, _extends3.default)({}, formItemLayout, {
                    label: 'Password'
                }),
                getFieldDecorator('password', {
                    rules: [{
                        required: true, message: 'Please input your password!'
                    }, {
                        validator: this.validateToNextPassword
                    }]
                })(_react2.default.createElement(_antd.Input, { type: 'password' }))
            ),
            _react2.default.createElement(
                FormItem,
                (0, _extends3.default)({}, formItemLayout, {
                    label: 'Confirm Password'
                }),
                getFieldDecorator('confirm', {
                    rules: [{
                        required: true, message: 'Please confirm your password!'
                    }, {
                        validator: this.compareToFirstPassword
                    }]
                })(_react2.default.createElement(_antd.Input, { type: 'password', onBlur: this.handleConfirmBlur }))
            ),
            _react2.default.createElement(
                FormItem,
                (0, _extends3.default)({}, formItemLayout, {
                    label: _react2.default.createElement(
                        'span',
                        null,
                        'Nickname\xA0',
                        _react2.default.createElement(
                            _antd.Tooltip,
                            { title: 'What do you want others to call you?' },
                            _react2.default.createElement(_antd.Icon, { type: 'question-circle-o' })
                        )
                    )
                }),
                getFieldDecorator('nickname', {
                    rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }]
                })(_react2.default.createElement(_antd.Input, null))
            ),
            _react2.default.createElement(
                FormItem,
                (0, _extends3.default)({}, formItemLayout, {
                    label: 'Habitual Residence'
                }),
                getFieldDecorator('residence', {
                    initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                    rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }]
                })(_react2.default.createElement(_antd.Cascader, { options: residences }))
            ),
            _react2.default.createElement(
                FormItem,
                (0, _extends3.default)({}, formItemLayout, {
                    label: 'Phone Number'
                }),
                getFieldDecorator('phone', {
                    rules: [{ required: true, message: 'Please input your phone number!' }]
                })(_react2.default.createElement(_antd.Input, { addonBefore: prefixSelector, style: { width: '100%' } }))
            ),
            _react2.default.createElement(
                FormItem,
                (0, _extends3.default)({}, formItemLayout, {
                    label: 'Website'
                }),
                getFieldDecorator('website', {
                    rules: [{ required: true, message: 'Please input website!' }]
                })(_react2.default.createElement(
                    _antd.AutoComplete,
                    {
                        dataSource: websiteOptions,
                        onChange: this.handleWebsiteChange,
                        placeholder: 'website'
                    },
                    _react2.default.createElement(_antd.Input, null)
                ))
            ),
            _react2.default.createElement(
                FormItem,
                (0, _extends3.default)({}, formItemLayout, {
                    label: 'Captcha',
                    extra: 'We must make sure that your are a human.'
                }),
                _react2.default.createElement(
                    _antd.Row,
                    { gutter: 8 },
                    _react2.default.createElement(
                        _antd.Col,
                        { span: 12 },
                        getFieldDecorator('captcha', {
                            rules: [{ required: true, message: 'Please input the captcha you got!' }]
                        })(_react2.default.createElement(_antd.Input, null))
                    ),
                    _react2.default.createElement(
                        _antd.Col,
                        { span: 12 },
                        _react2.default.createElement(
                            _antd.Button,
                            null,
                            'Get captcha'
                        )
                    )
                )
            ),
            _react2.default.createElement(
                FormItem,
                tailFormItemLayout,
                getFieldDecorator('agreement', {
                    valuePropName: 'checked'
                })(_react2.default.createElement(
                    _antd.Checkbox,
                    null,
                    'I have read the ',
                    _react2.default.createElement(
                        'a',
                        { href: '' },
                        'agreement'
                    )
                ))
            ),
            _react2.default.createElement(
                FormItem,
                tailFormItemLayout,
                _react2.default.createElement(
                    _antd.Button,
                    { type: 'primary', htmlType: 'submit' },
                    'Register'
                )
            )
        );
    };

    return UserForm;
}(_react2.default.Component);

exports.default = _antd.Form.create()(UserForm);
module.exports = exports['default'];