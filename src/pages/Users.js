import React from 'react';
import { Breadcrumb } from 'antd';

export default class Users extends React.Component {
    render () {
        return (<div>
            <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Users</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{padding: 24, background: '#fff'}}>
                Bill is a cat.
            </div>
        </div>);
    }
}
