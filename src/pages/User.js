import React from 'react';
import {Breadcrumb} from 'antd';
import UserForm from '../components/forms/UserForm';

export default class User extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
    };

    render () {
        return (<div>
            <h1>User</h1>
            <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Users</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="content-section">
                <UserForm/>
            </div>

        </div>);
    }
}
