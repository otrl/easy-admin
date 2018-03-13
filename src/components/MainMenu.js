import React from 'react';
import { Menu, Icon } from 'antd';

import { NavLink, withRouter } from "react-router-dom";

const SubMenu = Menu.SubMenu;

function MainMenu ({ location }) {
    return (
        <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]}>
            <Menu.Item key="/">
                <NavLink to="/"><Icon type="pie-chart" /><span>Home</span></NavLink>
            </Menu.Item>
            <SubMenu
                key="sub0"
                title={<span><Icon type="user"/><span>User</span></span>}
            >
                <Menu.Item key="/users">
                    <NavLink to="/users"><Icon type="user"/><span>Users</span></NavLink>
                </Menu.Item>
                <Menu.Item key="/roles">
                    <NavLink to="/roles"><Icon type="user"/><span>Roles</span></NavLink>
                </Menu.Item>
            </SubMenu>

            <SubMenu
                key="sub1"
                title={<span><Icon type="user"/><span>User</span></span>}
            >
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
                key="sub2"
                title={<span><Icon type="team"/><span>Team</span></span>}
            >
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
                <Icon type="file"/>
                <span>File</span>
            </Menu.Item>
        </Menu>
    );
}

export default withRouter(MainMenu);

