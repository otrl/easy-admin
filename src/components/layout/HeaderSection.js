import React from 'react';
import PropTypes from 'prop-types';
import {Layout, Icon} from 'antd';
import {Link} from 'react-router-dom';

import Dictionary from '../../records/Dictionary';

export default function HeaderSection ({isMobile, navCollapsed, dictionary, toggleNav}) {
    return (
        <Layout.Header className="header-section">
            <Link to="/" className="logo"/>
            <Icon
                className="menu-trigger"
                type={navCollapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={toggleNav}
            />
        </Layout.Header>
    );
}

HeaderSection.propTypes = {
    dictionary: PropTypes.instanceOf(Dictionary).isRequired,
    toggleNav: PropTypes.func.isRequired,
    navCollapsed: PropTypes.bool,
    isMobile: PropTypes.bool,
};

HeaderSection.defaultProps = {
    navCollapsed: false,
    isMobile: false,
};
