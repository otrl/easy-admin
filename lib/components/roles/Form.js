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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _Dictionary = require('../../records/Dictionary');

var _Dictionary2 = _interopRequireDefault(_Dictionary);

var _Role = require('../../records/Role');

var _Role2 = _interopRequireDefault(_Role);

var _constants = require('../../constants');

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
                    _this.props.onSubmit(values);
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
                    label: dictionary.getByKey("ROLE_FORM_NAME_FIELD_LABEL")
                }),
                form.getFieldDecorator('name', {
                    rules: [{
                        required: true, message: dictionary.getByKey("ROLE_FORM_NAME_FIELD_REQUIRED")
                    }, {
                        type: "string", min: 2, max: 255, message: dictionary.getByKey("ROLE_FORM_NAME_FIELD_INVALID_FORMAT")
                    }]
                })(_react2.default.createElement(_antd.Input, { disabled: disabled }))
            ),
            _react2.default.createElement(
                _antd.Form.Item,
                (0, _extends3.default)({}, formItemLayout, {
                    label: dictionary.getByKey("ROLE_FORM_DESCRIPTION_FIELD_LABEL")
                }),
                form.getFieldDecorator('description', {
                    rules: [{
                        required: true, message: dictionary.getByKey("ROLE_FORM_DESCRIPTION_FIELD_REQUIRED")
                    }, {
                        type: "string", min: 2, max: 255, message: dictionary.getByKey("ROLE_FORM_DESCRIPTION_FIELD_INVALID_FORMAT")
                    }]
                })(_react2.default.createElement(_antd.Input, { disabled: disabled }))
            ),
            _react2.default.createElement(
                _antd.Form.Item,
                (0, _extends3.default)({}, formItemLayout, {
                    label: dictionary.getByKey("ROLE_FORM_PERMISSIONS_FIELD_LABEL")
                }),
                form.getFieldDecorator('permissions', {
                    rules: [{
                        required: true, message: dictionary.getByKey("ROLE_FORM_PERMISSIONS_FIELD_REQUIRED")
                    }]
                })(_react2.default.createElement(
                    _antd.Select,
                    {
                        disabled: disabled,
                        mode: 'multiple'
                    },
                    _lodash2.default.values(_constants.Permissions).map(function (permission) {
                        return _react2.default.createElement(
                            _antd.Select.Option,
                            { key: permission },
                            permission
                        );
                    })
                ))
            ),
            _react2.default.createElement(
                _antd.Form.Item,
                tailFormItemLayout,
                _react2.default.createElement(
                    _antd.Button,
                    { type: 'primary', loading: loading, disabled: disabled, htmlType: 'submit', icon: 'save' },
                    dictionary.getByKey("ROLE_FORM_SUBMIT")
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
    role: _propTypes2.default.instanceOf(_Role2.default)
};
Form.defaultProps = {
    loading: false,
    disabled: false,
    role: null
};
exports.default = _antd.Form.create({
    mapPropsToFields: function mapPropsToFields(_ref) {
        var role = _ref.role;

        if (role) {
            return {
                name: _antd.Form.createFormField({
                    value: role.name
                }),
                description: _antd.Form.createFormField({
                    value: role.description
                }),
                permissions: _antd.Form.createFormField({
                    value: role.permissions.toArray()
                })
            };
        }

        return null;
    }
})(Form);
module.exports = exports.default;