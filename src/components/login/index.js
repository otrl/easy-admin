import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {bindActionCreators} from 'redux';
import {Redirect, Link} from 'react-router-dom';
import {Row, Col, Form, Icon, Input, Button, Card, Alert} from 'antd';
import {connect} from 'react-redux';

import AuthActions from '../../actions/AuthActions';
import {Urls, ApiExceptions} from '../../constants';

import UiState from '../../records/UiState';
import User from '../../records/User';
import Dictionary from '../../records/Dictionary';

class Login extends React.PureComponent {
    static propTypes = {
        ui: PropTypes.instanceOf(UiState).isRequired,
        dictionary: PropTypes.instanceOf(Dictionary).isRequired,
        login: PropTypes.func.isRequired,
        user: PropTypes.instanceOf(User),
        history: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
    };

    static defaultProps = {
        user: null
    };

    state = {
        loading: false,
        error: null
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const {form, dictionary} = this.props;
        this.setState({
            loading: true,
            error: null
        });

        form.validateFieldsAndScroll(async (errors, values) => {
            if (!errors) {
                try {
                    await this.props.login(values.email, values.password);
                } catch (err) {
                    if (err.response && err.response.data && err.response.data.error) {
                        this.setState({
                            loading: false,
                            error: dictionary.getByKey(err.response.data.error)
                        });
                    } else {
                        this.setState({
                            loading: false,
                            error: dictionary.getByKey("AUTH_ERROR_GENERIC")
                        });
                    }
                }
            } else {
                this.setState({
                    loading: false
                });
            }
        });
    };

    render () {
        const {form, user, location, dictionary} = this.props;
        const {getFieldDecorator} = form;
        const {loading, error} = this.state;

        if (user) {
            return <Redirect push to={location.state ? location.state.from.pathname : Urls.HOME}/>;
        }

        return (
            <React.Fragment>
                <Helmet>
                    <title>{dictionary.getByKey("LOGIN_PAGE_TITLE")}</title>
                </Helmet>
                <Row type="flex" className="full-height" justify="center" align="middle">
                    <Col xs={22} sm={16} md={16} lg={8}>
                        <Card
                            type="inner"
                            title={dictionary.getByKey("LOGIN_FRAME_TITLE")}
                        >
                            {error && <React.Fragment><Alert type="error" message={error} showIcon/><br/></React.Fragment>}
                            <Form disabled={loading} onSubmit={this.handleSubmit} className="login-form">
                                <Form.Item>
                                    {getFieldDecorator('email', {
                                        rules: [
                                            {required: true, message: dictionary.getByKey("LOGIN_EMAIL_REQUIRED")},
                                            {type: "email", message: dictionary.getByKey("LOGIN_EMAIL_INVALID_FORMAT")}
                                        ],
                                    })(
                                        <Input size="large" prefix={<Icon type="user"/>}
                                               placeholder={dictionary.getByKey("LOGIN_EMAIL_PLACEHOLDER")}/>
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('password', {
                                        rules: [{
                                            required: true,
                                            message: dictionary.getByKey("LOGIN_PASSWORD_REQUIRED")
                                        }],
                                    })(
                                        <Input size="large" prefix={<Icon type="lock"/>} type="password"
                                               placeholder={dictionary.getByKey("LOGIN_PASSWORD_PLACEHOLDER")}/>
                                    )}
                                </Form.Item>
                                <Button disabled={loading} type="primary" icon={loading ? "loading" : "login"}
                                        htmlType="submit">
                                    {dictionary.getByKey("LOGIN_BUTTON")}
                                </Button>
                                &nbsp;&nbsp;&nbsp;<Link to={Urls.REQUEST_PASSWORD_RESET}>{dictionary.getByKey("LOGIN_PASSWORD_RESET_LINK_TEXT")}</Link>
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
        login: bindActionCreators(AuthActions.login, dispatch),
    };
};

const getStoresMap = (state) => {
    return {
        user: state.auth.user,
        dictionary: state.dictionary,
        ui: state.ui
    };
};

const WrappedLogin = Form.create()(Login);


export default connect(getStoresMap, dispatchToProps)(WrappedLogin)
