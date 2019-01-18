import React from 'react';
import PropTypes from 'prop-types';
import {Drawer} from 'antd';
import {List} from 'immutable';

import Dictionary from '../../records/Dictionary';
import User from '../../records/User';
import {defaultConfigShape} from '../../default-config';

import Menu from './Menu';

export default class MenuSection extends React.PureComponent {
    static propTypes = {
        dictionary: PropTypes.instanceOf(Dictionary),
        collapsed: PropTypes.bool.isRequired,
        isMobile: PropTypes.bool.isRequired,
        toggleNav: PropTypes.func.isRequired,
        appTree: defaultConfigShape.appTree,
        currentPathMatch: PropTypes.instanceOf(List),
        user: PropTypes.instanceOf(User).isRequired,
    };

    static defaultProps = {
        currentPathMatch: null,
        appTree: []
    };

    render () {
        const {dictionary, collapsed, isMobile, toggleNav, currentPathMatch, user, appTree} = this.props;
        return isMobile ? (
            <Drawer visible={!collapsed} placement="left" onClose={toggleNav} style={{padding: 0, height: '100vh'}}>
                <Menu dictionary={dictionary}
                      toggleNav={toggleNav}
                      appTree={appTree}
                      user={user}
                      currentPathMatch={currentPathMatch}
                      collapsed={isMobile ? false : collapsed}/>
            </Drawer>
        ) : (
            <Menu dictionary={dictionary}
                  toggleNav={toggleNav}
                  appTree={appTree}
                  user={user}
                  currentPathMatch={currentPathMatch}
                  collapsed={collapsed}/>
        );
    }
}
