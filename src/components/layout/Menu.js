import React from 'react';
import PropTypes from 'prop-types';
import {Layout, Menu as AntMenu, Icon} from 'antd';
import {List} from 'immutable';
import {NavLink} from 'react-router-dom';

import {Permissions, Urls} from '../../constants';
import {defaultConfigShape} from '../../default-config';

import Dictionary from '../../records/Dictionary';
import User from '../../records/User';

export default function Menu ({dictionary, collapsed, toggleNav, user, currentPathMatch, appTree}) {
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
                {user.hasPermission(Permissions.ACTION_LOG_VIEW) && <AntMenu.Item key={Urls.ACTION_LOG}>
                    <NavLink to={Urls.ACTION_LOG}>
                        <Icon type="eye" />
                        <span>{dictionary.getByKey("NAVIGATION_ACTION_LOG")}</span>
                    </NavLink>
                </AntMenu.Item>}
                {appTree && appTree.map(navigationItem => {
                    return (user.hasPermission(navigationItem.navPermission) && navigationItem.navString)  && <AntMenu.Item key={navigationItem.path}>
                        <NavLink to={navigationItem.path}>
                            {navigationItem.navIcon && <Icon type={navigationItem.navIcon} />}
                            <span>{dictionary.getByKey(navigationItem.navString)}</span>
                        </NavLink>
                    </AntMenu.Item>;
                })}
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
    appTree: defaultConfigShape.appTree,
};

Menu.defaultProps = {
    collapsed: false,
    currentPathMatch: null,
    navigation: []
};
