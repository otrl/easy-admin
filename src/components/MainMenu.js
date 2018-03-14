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
        </Menu>
    );
}

export default withRouter(MainMenu);

