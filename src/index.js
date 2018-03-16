import React from 'react';
import PropTypes from 'prop-types';
import {Layout, Icon} from 'antd';

import Drawer from 'rc-drawer-menu';
import 'rc-drawer-menu/assets/index.css';

import {TransitionGroup, CSSTransition} from "react-transition-group";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import ResponsiveRender from './components/ResponsiveRender';
import MainMenu from './components/MainMenu';
import Users from './pages/Users';
import User from './pages/User';
import Roles from './pages/Roles';
import Login from './pages/Login';
import Home from './pages/Home';

const {Header, Content, Footer, Sider} = Layout;

export default class Index extends React.Component {
    static propTypes = {
        navigation: PropTypes.array,
        routes: PropTypes.array,
        homeComponent: PropTypes.node
    };

    static defaultProps = {
        navigation: [],
        routes: [],
        homeComponent: <Home/>
    };

    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        this.setState({collapsed});
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render () {
        return (
            <Router>
                <Route render={({location}) => (
                    <Switch location={location}>
                        <Route exact path="/login" component={Login}/>
                        <Route render={() =>
                            <Layout style={{minHeight: '100vh'}}>

                                <ResponsiveRender displayFrom="lg">
                                    <Sider
                                        breakpoint="xl"
                                        collapsible
                                        collapsed={this.state.collapsed}
                                        onCollapse={this.onCollapse}
                                        trigger={null}
                                    >
                                        <div className={!this.state.collapsed ? 'logo-big' : 'logo-small'}/>
                                        <MainMenu navigation={this.props.navigation}/>
                                    </Sider>
                                </ResponsiveRender>
                                <ResponsiveRender displayTo="lg">
                                    <Drawer
                                        width="240px"
                                        open={this.state.collapsed}
                                        onMaskClick={() => this.onCollapse(false)}
                                        iconChild={false}
                                    >
                                        <div className="logo-big"/>
                                        <MainMenu navigation={this.props.navigation}/>
                                    </Drawer>
                                </ResponsiveRender>

                                <Layout>
                                    <Header style={{background: '#fff'}}>
                                        <Icon
                                            className="trigger"
                                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                            onClick={this.toggle}
                                        />
                                    </Header>
                                    <Content style={{margin: '0 16px'}}>
                                        <TransitionGroup>
                                            <CSSTransition key={location.key} classNames="fadeInUpSmall" timeout={300}>
                                                <Switch location={location}>
                                                    <Route exact path="/users/:id" component={User}/>
                                                    <Route exact path="/users" component={Users}/>
                                                    <Route exact path="/roles" component={Roles}/>
                                                    {this.props.routes.map(route => <route/>)}
                                                    <Route render={() => this.props.homeComponent}/>
                                                </Switch>
                                            </CSSTransition>
                                        </TransitionGroup>
                                    </Content>
                                    <Footer style={{textAlign: 'center'}}>
                                        Ant Design ©2016 Created by Ant UED
                                    </Footer>
                                </Layout>
                            </Layout>
                        }/>
                    </Switch>
                )}
                />
            </Router>
        );
    }
}
