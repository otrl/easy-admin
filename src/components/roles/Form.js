import React from 'react';
import PropTypes from 'prop-types';
import {Form as AntForm, Input, Button, Select} from 'antd';
import _ from 'lodash';

import Dictionary from '../../records/Dictionary';
import Role from '../../records/Role';
import {Permissions} from '../../constants';

class Form extends React.PureComponent {
    static propTypes = {
        dictionary: PropTypes.instanceOf(Dictionary).isRequired,
        onSubmit: PropTypes.func.isRequired,
        loading: PropTypes.bool,
        disabled: PropTypes.bool,
        role: PropTypes.instanceOf(Role)
    };

    static defaultProps = {
        loading: false,
        disabled: false,
        role: null,
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
        const {dictionary, form, loading, disabled} = this.props;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
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
                    label={dictionary.getByKey("ROLE_FORM_NAME_FIELD_LABEL")}
                >
                    {form.getFieldDecorator('name', {
                        rules: [{
                            required: true, message: dictionary.getByKey("ROLE_FORM_NAME_FIELD_REQUIRED"),
                        },{
                            type: "string", min: 2, max: 255, message: dictionary.getByKey("ROLE_FORM_NAME_FIELD_INVALID_FORMAT"),
                        }],
                    })(
                        <Input disabled={disabled}/>
                    )}
                </AntForm.Item>
                <AntForm.Item
                    {...formItemLayout}
                    label={dictionary.getByKey("ROLE_FORM_DESCRIPTION_FIELD_LABEL")}
                >
                    {form.getFieldDecorator('description', {
                        rules: [{
                            required: true, message: dictionary.getByKey("ROLE_FORM_DESCRIPTION_FIELD_REQUIRED"),
                        },{
                            type: "string", min: 2, max: 255, message: dictionary.getByKey("ROLE_FORM_DESCRIPTION_FIELD_INVALID_FORMAT"),
                        }],
                    })(
                        <Input disabled={disabled}/>
                    )}
                </AntForm.Item>
                <AntForm.Item
                    {...formItemLayout}
                    label={dictionary.getByKey("ROLE_FORM_PERMISSIONS_FIELD_LABEL")}
                >
                    {form.getFieldDecorator('permissions', {
                        rules: [{
                            required: true, message: dictionary.getByKey("ROLE_FORM_PERMISSIONS_FIELD_REQUIRED"),
                        }],
                    })(
                        <Select
                            disabled={disabled}
                            mode="multiple"
                        >
                            {_.values(Permissions).map( permission => <Select.Option key={permission}>{permission}</Select.Option>)}
                        </Select>
                    )}
                </AntForm.Item>
                <AntForm.Item {...tailFormItemLayout}>
                    <Button type="primary" loading={loading} disabled={disabled} htmlType="submit" icon="save">{dictionary.getByKey("ROLE_FORM_SUBMIT")}</Button>
                </AntForm.Item>
            </AntForm>
        );
    }
}

export default AntForm.create({
    mapPropsToFields ({role}) {
        if (role) {
            return {
                name: AntForm.createFormField({
                    value: role.name
                }),
                description: AntForm.createFormField({
                    value: role.description
                }),
                permissions: AntForm.createFormField({
                    value: role.permissions.toArray()
                }),
            };
        }

        return null;
    }
})(Form)
