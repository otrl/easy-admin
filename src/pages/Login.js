import React from 'react';
import { Card, Row, Col, Icon, Divider } from 'antd';
import GoogleLogin from 'react-google-login';

export default class Login extends React.Component {
    responseGoogle = (response) => {
        console.log(response);
    };

    render () {
        return (
            <div className="vertical-center-wrapper">
                <div className="vertical-center-inner">
                    <Row type="flex" align="middle">
                        <Col xs={{ span: 22, offset: 1 }} sm={{ span: 12, offset: 6 }} lg={{ span: 8, offset: 8 }}>
                            <Card title="Login">
                                <GoogleLogin
                                    className="ant-btn ant-btn-primary ant-btn-lg"
                                    style={{ width: '100%'}}
                                    clientId="620481000705-nqn5klolm8mjb10ls0gihsbvq11gq6sr.apps.googleusercontent.com"
                                    buttonText="Login"
                                    onSuccess={this.responseGoogle}
                                    onFailure={this.responseGoogle}
                                ><Icon type="google" /> Login with your Gmail account</GoogleLogin>
                                {/*<Divider>Or</Divider>*/}
                                {/*<GoogleLogin*/}
                                    {/*className="ant-btn ant-btn-primary ant-btn-lg"*/}
                                    {/*style={{ width: '100%'}}*/}
                                    {/*clientId="620481000705-nqn5klolm8mjb10ls0gihsbvq11gq6sr.apps.googleusercontent.com"*/}
                                    {/*buttonText="Login"*/}
                                    {/*onSuccess={this.responseGoogle}*/}
                                    {/*onFailure={this.responseGoogle}*/}
                                {/*><Icon type="google" /> Login with your Facebook account</GoogleLogin>*/}

                                {/*<a href="/"> home</a>*/}
                            </Card>
                        </Col>
                    </Row>


                </div>
            </div>
        );
    }
}
