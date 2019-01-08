import React from 'react';
import PropTypes from 'prop-types';
import {Form as AntForm, DatePicker, Button, Row, Col} from 'antd';
import moment from 'moment-timezone';

import Dictionary from '../../records/Dictionary';

class TimelineDateRangeForm extends React.PureComponent {
    static propTypes = {
        dictionary: PropTypes.instanceOf(Dictionary).isRequired,
        onSubmit: PropTypes.func.isRequired,
        loading: PropTypes.bool,
        disabled: PropTypes.bool,
        fromDate: PropTypes.instanceOf(moment),
        toDate: PropTypes.instanceOf(moment)
    };

    static defaultProps = {
        loading: false,
        disabled: false,
        fromDate: null,
        toDate: null,
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.onSubmit({
                    range: values.range,
                });
            }
        });
    };

    render () {
        const {dictionary, form, loading, disabled} = this.props;

        return (
            <AntForm layout="inline" onSubmit={this.onSubmit}>
                <AntForm.Item>
                    {form.getFieldDecorator("range")(
                        <DatePicker.RangePicker disabled={disabled}/>
                    )}
                </AntForm.Item>
                <AntForm.Item>
                    <Button type="primary"
                            loading={loading}
                            disabled={disabled}
                            htmlType="submit"
                            icon="search">{dictionary.getByKey("ACCOUNT_TIMELINE_FORM_SUBMIT")}</Button>
                </AntForm.Item>
            </AntForm>
        );
    }
}

export default AntForm.create({
    mapPropsToFields ({fromDate, toDate}) {
        return {
            range: AntForm.createFormField({
                value: [fromDate, toDate]
            }),
        };
    }
})(TimelineDateRangeForm)
