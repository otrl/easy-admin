import React from 'react';
import PropTypes from 'prop-types';
import {Layout, Icon, Menu} from 'antd';
import {Link, NavLink} from 'react-router-dom';

import {Permissions, Urls} from '../../constants';

import Dictionary from '../../records/Dictionary';
import User from '../../records/User';

export default function HeaderSection ({isMobile, navCollapsed, dictionary, toggleNav, user}) {
    return (
        <Layout.Header className="header-section">
            <Link to="/" className="logo"/>
            <Icon
                className="menu-trigger"
                type={navCollapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={toggleNav}
            />
            <div className="header-section-right-menu">
                <Menu mode="horizontal" selectable={false}>
                    <Menu.SubMenu title={<span className="submenu-title-wrapper"><Icon type="user" />{dictionary.getByKey("HEADER_GREET_USER", {name: user.first_name})}</span>}>
                        {user.hasPermission(Permissions.ACCOUNT_VIEW) && <Menu.Item key={Urls.ACCOUNT}>
                            <Link to={Urls.ACCOUNT}>
                                <Icon type="setting" />
                                <span>{dictionary.getByKey("NAVIGATION_ACCOUNT")}</span>
                            </Link>
                        </Menu.Item>}
                        <Menu.Item>
                            <Link to={Urls.LOGOUT}>
                                <Icon type="poweroff" />
                                <span>{dictionary.getByKey("NAVIGATION_LOGOUT")}</span>
                            </Link>
                        </Menu.Item>
                    </Menu.SubMenu>
                </Menu>
            </div>
        </Layout.Header>
    );
}

HeaderSection.propTypes = {
    dictionary: PropTypes.instanceOf(Dictionary).isRequired,
    toggleNav: PropTypes.func.isRequired,
    user: PropTypes.instanceOf(User).isRequired,
    navCollapsed: PropTypes.bool,
    isMobile: PropTypes.bool,
};

HeaderSection.defaultProps = {
    navCollapsed: false,
    isMobile: false,
};
