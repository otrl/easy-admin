import React from 'react';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;


export default class User extends React.Component{
    text = 'something random';

    blabla () {
        return this.text + 'suppppp?';
    }

    render () {
        return (
            <Layout>
                <Sider>Sider</Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        );
    }
}
