import React from 'react';
import {Breadcrumb, Table, Button, Icon, Pagination, Row, Col, Popconfirm} from 'antd';
import { Link } from "react-router-dom";

export default class Users extends React.Component {
    state = {
        selectedRowKeys: [],
        page: 1
    };

    onSelectChange = (selectedRowKeys) => {
        this.setState({ selectedRowKeys });
    };

    render () {
        const dataSource = [{
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street'
        }, {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street'
        }];

        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => <Link to={ `users/${record.key}` }>{text}</Link>
        }, {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        }, {
            title: '',
            width: 20,
            render: (text, record) => <Popconfirm title="Are you sure delete this task?" placement="topRight" onConfirm={confirm} onCancel={cancel} okText="Yes" cancelText="No">
                <Button size="small" type="danger">
                    <Icon type="delete" />
                </Button>
            </Popconfirm>
        }];

        const { selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };

        const onShowSizeChange = (current, pageSize) => {
            console.log(current, pageSize);
        };

        const onChange = (page) => {
            this.setState({
                page
            });
        };

        const confirm = function (e) {
            console.log(e);
        };

        const cancel = function (e) {
            console.log(e);
        };

        const footer =
            <Row>
                <Col xs={24} sm={24} md={9}>
                    <Button type="primary">
                        <Icon type="plus-circle-o" />Add new
                    </Button>
                    &nbsp;&nbsp;
                    <Popconfirm title="Are you sure delete this task?" onConfirm={confirm} onCancel={cancel} okText="Yes" cancelText="No">
                    <Button type="danger">
                        <Icon type="delete" />Delete selected
                    </Button>
                    </Popconfirm>
                </Col>
                <Col xs={24} sm={24} md={1}>&nbsp;</Col>
                <Col xs={24} sm={24} md={14} style={{ textAlign: 'right'}}>
                    <Pagination showSizeChanger
                                onShowSizeChange={onShowSizeChange}
                                current={this.state.page}
                                onChange={onChange}
                                total={500} />
                </Col>
            </Row>
         ;

        return (<div>
            <h1>User management</h1>
            <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Users</Breadcrumb.Item>
                {/*<Breadcrumb.Item>Bill</Breadcrumb.Item>*/}
            </Breadcrumb>
            <Table dataSource={dataSource} columns={columns} bordered rowSelection={rowSelection} pagination={ false } footer={() => footer}/>
            <br/>

        </div>);
    }
}
