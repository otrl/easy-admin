import React from 'react';
import PropTypes from 'prop-types';
import {Layout, Menu as AntMenu, Icon} from 'antd';
import {List} from 'immutable';
import {NavLink} from 'react-router-dom';

import {Permissions, Urls} from '../../constants';

import Dictionary from '../../records/Dictionary';
import User from '../../records/User';

export default function Menu ({dictionary, collapsed, toggleNav, user, currentPathMatch}) {
    return (
        <Layout.Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            breakpoint="lg"
            onCollapse={toggleNav}
            className="sider"
        >
            <AntMenu
                selectedKeys={currentPathMatch.toArray()}
                mode="inline"
            >
                {user.hasPermission(Permissions.ACCOUNT_VIEW) && <AntMenu.Item key={Urls.ACCOUNT}>
                    <NavLink to={Urls.ACCOUNT}>
                        <Icon type="setting" />
                        <span>{dictionary.getByKey("NAVIGATION_ACCOUNT")}</span>
                    </NavLink>
                </AntMenu.Item>}
                {user.hasPermission(Permissions.USERS_VIEW) && <AntMenu.Item key={Urls.USERS}>
                    <NavLink to={Urls.USERS}>
                        <Icon type="user" />
                        <span>{dictionary.getByKey("NAVIGATION_USERS")}</span>
                    </NavLink>
                </AntMenu.Item>}
                {user.hasPermission(Permissions.ROLES_VIEW) && <AntMenu.Item key={Urls.ROLES}>
                    <NavLink to={Urls.ROLES}>
                        <Icon type="team" />
                        <span>{dictionary.getByKey("NAVIGATION_ROLES")}</span>
                    </NavLink>
                </AntMenu.Item>}
                {user.hasPermission(Permissions.CARDHOLDERS_VIEW) && <AntMenu.Item key={Urls.CARDHOLDERS}>
                    <NavLink to={Urls.CARDHOLDERS}>
                        <Icon type="contacts" />
                        <span>{dictionary.getByKey("NAVIGATION_CARDHOLDERS")}</span>
                    </NavLink>
                </AntMenu.Item>}
                {user.hasPermission(Permissions.CUSTOMERS_VIEW) && <AntMenu.Item key={Urls.CUSTOMERS}>
                    <NavLink to={Urls.CUSTOMERS}>
                        <Icon type="contacts" />
                        <span>{dictionary.getByKey("NAVIGATION_CUSTOMERS")}</span>
                    </NavLink>
                </AntMenu.Item>}
                {user.hasPermission(Permissions.ACTION_LOG_VIEW) && <AntMenu.Item key={Urls.ACTION_LOG}>
                    <NavLink to={Urls.ACTION_LOG}>
                        <Icon type="eye" />
                        <span>{dictionary.getByKey("NAVIGATION_ACTION_LOG")}</span>
                    </NavLink>
                </AntMenu.Item>}
            </AntMenu>
        </Layout.Sider>
    );
}

Menu.propTypes = {
    dictionary: PropTypes.instanceOf(Dictionary).isRequired,
    toggleNav: PropTypes.func.isRequired,
    user: PropTypes.instanceOf(User).isRequired,
    currentPathMatch: PropTypes.instanceOf(List),
    collapsed: PropTypes.bool,
};

Menu.defaultProps = {
    collapsed: false,
    currentPathMatch: null
};
