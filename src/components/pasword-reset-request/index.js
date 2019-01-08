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


class PasswordResetRequest extends React.PureComponent {
    static propTypes = {
        dictionary: PropTypes.instanceOf(Dictionary).isRequired,
        passwordResetRequest: PropTypes.func.isRequired,
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
        const {form, history, dictionary} = this.props;
        this.setState({
            loading: true
        });

        form.validateFieldsAndScroll(async (errors, values) => {
            if (!errors) {
                try {
                    await this.props.passwordResetRequest(values.email);
                    notification.success({
                        message: dictionary.getByKey("PASSWORD_RESET_REQUEST_SUCCESS_NOTIFICATION_TITLE"),
                        description: dictionary.getByKey("PASSWORD_RESET_REQUEST_SUCCESS_NOTIFICATION_DESCRIPTION"),
                        duration: 7,
                    });
                    history.push({pathname: Urls.LOGIN});
                } catch (err) {
                    console.log(err);
                    notification.error({
                        message: dictionary.getByKey("PASSWORD_RESET_REQUEST_ERROR_NOTIFICATION_TITLE"),
                        description: dictionary.getByKey("PASSWORD_RESET_REQUEST_ERROR_NOTIFICATION_DESCRIPTION")
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
                    <title>{dictionary.getByKey("PASSWORD_RESET_REQUEST_PAGE_TITLE")}</title>
                </Helmet>
                <Row type="flex" className="full-height" justify="center" align="middle">
                    <Col xs={22} sm={16} md={16} lg={8}>
                        <Card
                            type="inner"
                            title={dictionary.getByKey("PASSWORD_RESET_REQUEST_FRAME_TITLE")}
                        >
                            <Form disabled={loading} onSubmit={this.handleSubmit} className="login-form">
                                <Form.Item>
                                    {getFieldDecorator('email', {
                                        rules: [
                                            {required: true, message: dictionary.getByKey("PASSWORD_RESET_REQUEST_EMAIL_REQUIRED")},
                                            {type: "email", message: dictionary.getByKey("PASSWORD_RESET_REQUEST_EMAIL_INVALID_FORMAT")}
                                        ],
                                    })(
                                        <Input size="large" prefix={<Icon type="user"/>}
                                               placeholder={dictionary.getByKey("PASSWORD_RESET_REQUEST_EMAIL_PLACEHOLDER")}/>
                                    )}
                                </Form.Item>
                                <Button disabled={loading} type="primary" icon={loading ? "loading" : "unlock"}
                                        htmlType="submit">
                                    {dictionary.getByKey("PASSWORD_RESET_REQUEST_BUTTON")}
                                </Button>
                                &nbsp;&nbsp;&nbsp;
                                <Link to={Urls.LOGIN}>{dictionary.getByKey("PASSWORD_RESET_REQUEST_BACK_LINK")}</Link>
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
        passwordResetRequest: bindActionCreators(PasswordResetActions.requestPasswordReset, dispatch),
    };
};

const getStoresMap = (state) => {
    return {
        user: state.auth.user,
        dictionary: state.dictionary,
    };
};

const WrappedPasswordResetRequest = Form.create()(PasswordResetRequest);


export default connect(getStoresMap, dispatchToProps)(WrappedPasswordResetRequest)
