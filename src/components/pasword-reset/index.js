import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {bindActionCreators} from 'redux';
import {Redirect, Link} from 'react-router-dom';
import {Row, Col, Form, Icon, Input, Button, Card, notification} from 'antd';
import {connect} from 'react-redux';

import PasswordResetActions from '../../actions/PasswordResetActions';
import {Urls} from '../../constants';

import User from '../../records/User';
import Dictionary from '../../records/Dictionary';


class PasswordReset extends React.PureComponent {
    static propTypes = {
        dictionary: PropTypes.instanceOf(Dictionary).isRequired,
        resetPassword: PropTypes.func.isRequired,
        user: PropTypes.instanceOf(User),
        history: PropTypes.object.isRequired,
    };

    static defaultProps = {
        user: null
    };

    state = {
        loading: false
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const {form, history, dictionary, match} = this.props;
        this.setState({
            loading: true
        });

        form.validateFieldsAndScroll(async (errors, values) => {
            if (!errors) {
                try {
                    await this.props.resetPassword(values.password, match.params.token);
                    notification.success({
                        message: dictionary.getByKey("PASSWORD_RESET_SUCCESS_NOTIFICATION_TITLE"),
                        description: dictionary.getByKey("PASSWORD_RESET_SUCCESS_NOTIFICATION_DESCRIPTION"),
                        duration: 7,
                    });
                    history.push({pathname: Urls.LOGIN});
                } catch (err) {
                    console.log(err.status);
                    notification.error({
                        message: dictionary.getByKey("PASSWORD_RESET_ERROR_NOTIFICATION_TITLE"),
                        description: dictionary.getByKey("PASSWORD_RESET_ERROR_NOTIFICATION_DESCRIPTION"),
                        duration: 12,
                    });
                    this.setState({
                        loading: false
                    });
                }
            } else {
                this.setState({
                    loading: false
                });
            }
        });
    };

    render () {
        const {form, user, dictionary} = this.props;
        const {getFieldDecorator} = form;
        const {loading} = this.state;

        if (user) {
            return <Redirect push to={Urls.HOME}/>;
        }

        return (
            <React.Fragment>
                <Helmet>
                    <title>{dictionary.getByKey("PASSWORD_RESET_PAGE_TITLE")}</title>
                </Helmet>
                <Row type="flex" className="full-height" justify="center" align="middle">
                    <Col xs={22} sm={16} md={16} lg={8}>
                        <Card
                            type="inner"
                            title={dictionary.getByKey("PASSWORD_RESET_FRAME_TITLE")}
                        >
                            <Form disabled={loading} onSubmit={this.handleSubmit} className="login-form">
                                <Form.Item>
                                    {getFieldDecorator('password', {
                                        rules: [
                                            {required: true, message: dictionary.getByKey("PASSWORD_RESET_PASSWORD_REQUIRED")},
                                            {type: "string", min: 8, max: 100, message: dictionary.getByKey("PASSWORD_RESET_PASSWORD_INVALID_FORMAT")},
                                            {validator(rule, value, callback) {
                                                if (value) {
                                                    form.validateFields(["passwordConfirmation"], { force: true });
                                                }
                                                callback();
                                            }}
                                        ],
                                    })(
                                        <Input size="large" type="password" prefix={<Icon type="ellipsis"/>}
                                               placeholder={dictionary.getByKey("PASSWORD_RESET_PASSWORD_PLACEHOLDER")}/>
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('passwordConfirmation', {
                                        rules: [
                                            {required: true, message: dictionary.getByKey("PASSWORD_RESET_PASSWORD_CONFIRMATION_REQUIRED")},
                                            {validator(rule, value, callback) {
                                                if (value && value !== form.getFieldValue("password")) {
                                                    callback(dictionary.getByKey("PASSWORD_RESET_PASSWORD_CONFIRMATION_MISMATCH"));
                                                } else {
                                                    callback();
                                                }
                                            }}
                                        ],
                                    })(
                                        <Input size="large" type="password" prefix={<Icon type="ellipsis"/>}
                                               placeholder={dictionary.getByKey("PASSWORD_RESET_PASSWORD_CONFIRMATION_PLACEHOLDER")}/>
                                    )}
                                </Form.Item>
                                <Button disabled={loading} type="primary" icon={loading ? "loading" : "unlock"}
                                        htmlType="submit">
                                    {dictionary.getByKey("PASSWORD_RESET_BUTTON")}
                                </Button>
                                &nbsp;&nbsp;&nbsp;
                                <Link to={Urls.LOGIN}>{dictionary.getByKey("PASSWORD_RESET_BACK_LINK")}</Link>
                            </Form>
                        </Card>

                    </Col>
                </Row>
            </React.Fragment>

        );
    }
}

const dispatchToProps = (dispatch) => {
    return {
        resetPassword: bindActionCreators(PasswordResetActions.resetPassword, dispatch),
    };
};

const getStoresMap = (state) => {
    return {
        user: state.auth.user,
        dictionary: state.dictionary,
    };
};

const WrappedPasswordReset = Form.create()(PasswordReset);


export default connect(getStoresMap, dispatchToProps)(WrappedPasswordReset)
