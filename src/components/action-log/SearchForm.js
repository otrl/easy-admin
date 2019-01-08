import React from 'react';
import PropTypes from 'prop-types';
import {Form as AntForm, DatePicker, Button, Select} from 'antd';
import _ from 'lodash';

import {ResourceAction, ResourceType} from '../../constants';
import Dictionary from '../../records/Dictionary';
import ActionLogSearch from '../../records/ActionLogSearch';
import UsersOptionsState from '../../records/UsersOptionsState';

class SearchForm extends React.PureComponent {
    static propTypes = {
        dictionary: PropTypes.instanceOf(Dictionary).isRequired,
        onSubmit: PropTypes.func.isRequired,
        usersOptionsState: PropTypes.instanceOf(UsersOptionsState).isRequired,
        onUserSelectType: PropTypes.func.isRequired,
        search: PropTypes.instanceOf(ActionLogSearch).isRequired,
        loading: PropTypes.bool,
        disabled: PropTypes.bool,
    };

    static defaultProps = {
        loading: false,
        disabled: false,
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
        const {dictionary, form, loading, disabled, usersOptionsState, onUserSelectType} = this.props;

        return (
            <AntForm layout="inline" onSubmit={this.onSubmit}>
                <AntForm.Item>
                    {form.getFieldDecorator("userId", {
                        rules: [],
                    })(
                        <Select
                            style={{minWidth: 200}}
                            allowClear={true}
                            showSearch={true}
                            placeholder={dictionary.getByKey("ACTION_LOG_SEARCH_FORM_USER_FIELD_PLACEHOLDER")}
                            defaultActiveFirstOption={false}
                            showArrow={false}
                            filterOption={false}
                            onSearch={onUserSelectType}
                            notFoundContent={null}
                        >
                            {usersOptionsState.users.map(user => <Select.Option value={user.id} key={user.id}>{user.first_name} {user.last_name}</Select.Option>)}
                        </Select>
                    )}
                </AntForm.Item>
                <AntForm.Item>
                    {form.getFieldDecorator("action", {
                        rules: [],
                    })(
                        <Select
                            style={{minWidth: 200}}
                            allowClear={true}
                            showSearch={true}
                            placeholder={dictionary.getByKey("ACTION_LOG_SEARCH_FORM_ACTION_TYPE_FIELD_PLACEHOLDER")}
                            defaultActiveFirstOption={false}
                            showArrow={false}
                            filterOption={false}
                            notFoundContent={null}
                        >
                            {_.valuesIn(ResourceAction).map(actionType => <Select.Option value={actionType} key={actionType}>{dictionary.getByKey(`ACTION_LOG_ACTION_TYPE_${actionType}`)}</Select.Option>)}
                        </Select>
                    )}
                </AntForm.Item>
                <AntForm.Item>
                    {form.getFieldDecorator("resourceType", {
                        rules: [],
                    })(
                        <Select
                            style={{minWidth: 200}}
                            allowClear={true}
                            showSearch={true}
                            placeholder={dictionary.getByKey("ACTION_LOG_SEARCH_FORM_RESOURCE_TYPE_FIELD_PLACEHOLDER")}
                            defaultActiveFirstOption={false}
                            showArrow={false}
                            filterOption={false}
                            notFoundContent={null}
                        >
                            {_.valuesIn(ResourceType).map(resourceType => <Select.Option value={resourceType} key={resourceType}>{dictionary.getByKey(`ACTION_LOG_RESOURCE_TYPE_${resourceType}`)}</Select.Option>)}
                        </Select>
                    )}
                </AntForm.Item>
                <AntForm.Item>
                    {form.getFieldDecorator("range", {
                        rules: [],
                    })(
                        <DatePicker.RangePicker allowClear={false} disabled={disabled}/>
                    )}
                </AntForm.Item>
                <AntForm.Item>
                    <Button type="primary"
                            loading={loading}
                            disabled={disabled}
                            htmlType="submit"
                            icon="search">{dictionary.getByKey("ACTION_LOG_SEARCH_FORM_SUBMIT")}</Button>
                </AntForm.Item>
            </AntForm>
        );
    }
}

export default AntForm.create({
    mapPropsToFields ({search}) {
        console.log(search);
        const {fromDate, toDate, userId, action, resourceType} = search;
        // const values = {};
        //
        // if (fromDate || toDate) {
        //     values.range = AntForm.createFormField({
        //         value: [fromDate, toDate]
        //     });
        // }
        //
        // if (userId) {
        //     values.range = AntForm.createFormField({
        //         value: [fromDate, toDate]
        //     });
        // }

        return {
            range: AntForm.createFormField({
                value: [fromDate, toDate]
            }),
            userId: AntForm.createFormField({
                value: userId || undefined
            }),
            action: AntForm.createFormField({
                value: action || undefined
            }),
            resourceType: AntForm.createFormField({
                value: resourceType || undefined
            })
        };
    }
})(SearchForm)
