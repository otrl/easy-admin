import React from 'react';
import { Breadcrumb } from 'antd';

export default class Roles extends React.Component {
    render () {
        return (<div>
            <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Roles</Breadcrumb.Item>
                <Breadcrumb.Item>Admin</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{padding: 24, background: '#fff'}}>
                Admin rums.
            </div>
        </div>);
    }
}
