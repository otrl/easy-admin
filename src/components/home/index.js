import React from 'react';
import {Helmet} from 'react-helmet';
import {Breadcrumb, Icon} from 'antd';

export default function Home () {
    return (
        <div className="content-section-inner">
            <Helmet>
                <title>Home page</title>
            </Helmet>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Icon type="home"/>
                </Breadcrumb.Item>
            </Breadcrumb>
            <h2>Home page</h2>
            <p>Replace this component with your custom dashboard</p>
        </div>
    );
}
