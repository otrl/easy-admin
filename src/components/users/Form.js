import React from 'react';
import PropTypes from 'prop-types';
import {List} from 'immutable';
import {Form as AntForm, Input, Button, Select} from 'antd';

import Dictionary from '../../records/Dictionary';
import User from '../../records/User';

class Form extends React.PureComponent {
    static propTypes = {
        dictionary: PropTypes.instanceOf(Dictionary).isRequired,
        onSubmit: PropTypes.func.isRequired,
        roles: PropTypes.instanceOf(List).isRequired,
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
                this.props.onSubmit(values);
            }
        });
    };

    render () {
        const {dictionary, form, loading, disabled, roles} = this.props;
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
                    label={dictionary.getByKey("USER_FORM_EMAIL_FIELD_LABEL")}
                >
                    {form.getFieldDecorator('email', {
                        rules: [{
                            required: true, message: dictionary.getByKey("USER_FORM_EMAIL_FIELD_REQUIRED"),
                        }, {
                            type: "string",
                            max: 255,
                            message: dictionary.getByKey("USER_FORM_EMAIL_FIELD_INVALID_FORMAT"),
                        }, {
                            type: "email", message: dictionary.getByKey("USER_FORM_EMAIL_FIELD_INVALID_FORMAT")
                        }],
                    })(
                        <Input disabled={disabled}/>
                    )}
                </AntForm.Item>
                <AntForm.Item
                    {...formItemLayout}
                    label={dictionary.getByKey("USER_FORM_FIRST_NAME_FIELD_LABEL")}
                >
                    {form.getFieldDecorator('first_name', {
                        rules: [{
                            required: true, message: dictionary.getByKey("USER_FORM_FIRST_NAME_FIELD_REQUIRED"),
                        }, {
                            type: "string",
                            min: 2,
                            max: 255,
                            message: dictionary.getByKey("USER_FORM_FIRST_NAME_FIELD_INVALID_FORMAT"),
                        }],
                    })(
                        <Input disabled={disabled}/>
                    )}
                </AntForm.Item>
                <AntForm.Item
                    {...formItemLayout}
                    label={dictionary.getByKey("USER_FORM_LAST_NAME_FIELD_LABEL")}
                >
                    {form.getFieldDecorator('last_name', {
                        rules: [{
                            required: true, message: dictionary.getByKey("USER_FORM_LAST_NAME_FIELD_REQUIRED"),
                        }, {
                            type: "string",
                            min: 2,
                            max: 255,
                            message: dictionary.getByKey("USER_FORM_LAST_NAME_FIELD_INVALID_FORMAT"),
                        }],
                    })(
                        <Input disabled={disabled}/>
                    )}
                </AntForm.Item>
                <AntForm.Item
                    {...formItemLayout}
                    label={dictionary.getByKey("USER_FORM_ROLE_FIELD_LABEL")}
                >
                    {form.getFieldDecorator('role_id', {
                        rules: [{
                            required: true, message: dictionary.getByKey("USER_FORM_ROLE_FIELD_REQUIRED"),
                        }],
                    })(
                        <Select
                            disabled={disabled}
                        >
                            { roles.map( role => <Select.Option key={role.id} value={role.id}>{role.name}</Select.Option>)}
                        </Select>
                    )}
                </AntForm.Item>
                <AntForm.Item {...tailFormItemLayout}>
                    <Button type="primary" loading={loading} disabled={disabled} htmlType="submit"
                            icon="save">{dictionary.getByKey("USER_FORM_SUBMIT")}</Button>
                </AntForm.Item>
            </AntForm>
        );
    }
}

export default AntForm.create({
    mapPropsToFields ({user}) {
        if (user) {
            return {
                email: AntForm.createFormField({
                    value: user.email
                }),
                first_name: AntForm.createFormField({
                    value: user.first_name
                }),
                last_name: AntForm.createFormField({
                    value: user.last_name
                }),
                role_id: AntForm.createFormField({
                    value: user.role_id
                }),
            };
        }

        return null;
    }
})(Form)
