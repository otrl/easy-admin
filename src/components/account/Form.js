import React from 'react';
import PropTypes from 'prop-types';
import {Form as AntForm, Input, Button} from 'antd';

import Dictionary from '../../records/Dictionary';
import User from '../../records/User';

class Form extends React.PureComponent {
    static propTypes = {
        dictionary: PropTypes.instanceOf(Dictionary).isRequired,
        onSubmit: PropTypes.func.isRequired,
        loading: PropTypes.bool,
        disabled: PropTypes.bool,
        user: PropTypes.instanceOf(User)
    };

    static defaultProps = {
        loading: false,
        disabled: false,
        user: null,
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.onSubmit({
                    email: values.accountEmail,
                    first_name: values.accountFirstName,
                    last_name: values.accountLastName,
                    password: values.accountPassword,
                });
            }
        });
    };

    render () {
        const {dictionary, form, loading, disabled} = this.props;
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 8},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 16},
            },
        };

        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };

        return (
            <AntForm onSubmit={this.onSubmit}>
                <AntForm.Item
                    {...formItemLayout}
                    label={dictionary.getByKey("ACCOUNT_FORM_EMAIL_FIELD_LABEL")}
                >
                    {form.getFieldDecorator('accountEmail', {
                        rules: [{
                            required: true, message: dictionary.getByKey("ACCOUNT_FORM_EMAIL_FIELD_REQUIRED"),
                        }, {
                            type: "string",
                            max: 255,
                            message: dictionary.getByKey("ACCOUNT_FORM_EMAIL_FIELD_INVALID_FORMAT"),
                        }, {
                            type: "email", message: dictionary.getByKey("ACCOUNT_FORM_EMAIL_FIELD_INVALID_FORMAT")
                        }],
                    })(
                        <Input disabled={disabled}/>
                    )}
                </AntForm.Item>
                <AntForm.Item
                    {...formItemLayout}
                    label={dictionary.getByKey("ACCOUNT_FORM_FIRST_NAME_FIELD_LABEL")}
                >
                    {form.getFieldDecorator('accountFirstName', {
                        rules: [{
                            required: true, message: dictionary.getByKey("ACCOUNT_FORM_FIRST_NAME_FIELD_REQUIRED"),
                        }, {
                            type: "string",
                            min: 2,
                            max: 255,
                            message: dictionary.getByKey("ACCOUNT_FORM_FIRST_NAME_FIELD_INVALID_FORMAT"),
                        }],
                    })(
                        <Input disabled={disabled}/>
                    )}
                </AntForm.Item>
                <AntForm.Item
                    {...formItemLayout}
                    label={dictionary.getByKey("ACCOUNT_FORM_LAST_NAME_FIELD_LABEL")}
                >
                    {form.getFieldDecorator('accountLastName', {
                        rules: [{
                            required: true, message: dictionary.getByKey("ACCOUNT_FORM_LAST_NAME_FIELD_REQUIRED"),
                        }, {
                            type: "string",
                            min: 2,
                            max: 255,
                            message: dictionary.getByKey("ACCOUNT_FORM_LAST_NAME_FIELD_INVALID_FORMAT"),
                        }],
                    })(
                        <Input disabled={disabled}/>
                    )}
                </AntForm.Item>
                <AntForm.Item
                    {...formItemLayout}
                    label={dictionary.getByKey("ACCOUNT_FORM_PASSWORD_FIELD_LABEL")}>
                    {form.getFieldDecorator("accountPassword", {
                        rules: [
                            {type: "string", min: 8, max: 100, message: dictionary.getByKey("ACCOUNT_FORM_PASSWORD_INVALID_FORMAT")},
                            {validator(rule, value, callback) {
                                    if (value) {
                                        form.validateFields(["passwordConfirmation"], { force: true });
                                    }
                                    callback();
                                }}
                        ],
                    })(
                        <Input type="password" disabled={disabled}/>
                    )}
                </AntForm.Item>
                <AntForm.Item
                    {...formItemLayout}
                    label={dictionary.getByKey("ACCOUNT_FORM_PASSWORD_CONFIRMATION_FIELD_LABEL")}>
                    {form.getFieldDecorator("accountPasswordConfirmation", {
                        rules: [
                            {validator(rule, value, callback) {
                                    if (value && value !== form.getFieldValue("accountPassword")) {
                                        callback(dictionary.getByKey("ACCOUNT_FORM_PASSWORD_CONFIRMATION_MISMATCH"));
                                    } else {
                                        callback();
                                    }
                                }}
                        ],
                    })(
                        <Input type="password" disabled={disabled}/>

                    )}
                </AntForm.Item>
                <AntForm.Item {...tailFormItemLayout}>
                    <Button type="primary" loading={loading} disabled={disabled} htmlType="submit"
                            icon="save">{dictionary.getByKey("ACCOUNT_FORM_SUBMIT")}</Button>
                </AntForm.Item>
            </AntForm>
        );
    }
}

export default AntForm.create({
    mapPropsToFields ({user}) {
        if (user) {
            return {
                accountEmail: AntForm.createFormField({
                    value: user.email
                }),
                accountFirstName: AntForm.createFormField({
                    value: user.first_name
                }),
                accountLastName: AntForm.createFormField({
                    value: user.last_name
                }),
                accountPassword: AntForm.createFormField({
                    value: ''
                }),
                accountPasswordConfirmation: AntForm.createFormField({
                    value: ''
                }),
            };
        }

        return null;
    }
})(Form)
