import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
// import FirstPage from './FirstPage'
// import SecondPage from './SecondPage'
import { FirstPage, SecondPage } from "pages";
import NoMatch from "components/NoMatch";

import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

export default class App extends Component {
    render() {
        return (
            <div>
                {/* <h1>Server Side Rendering with Create React App v2</h1> */}
                <Layout>
				<Layout.Header>ll</Layout.Header>
                    <Layout>
                        
						<Layout.Sider>
                        <Menu theme="dark" inlineCollapsed="true" mode="inline">
                            <Menu.Item>Menu</Menu.Item>
                            <Menu.SubMenu title="SubMenu">
                                <Menu.Item><Link to={"/second"}>Second</Link></Menu.Item>
                            </Menu.SubMenu>
                        </Menu>
                    </Layout.Sider>
                        <Layout.Content>
                            <Switch>
                                <Route exact path="/" component={FirstPage} />
                                <Route path="/second" component={SecondPage} />
                                <Route component={NoMatch} />
                            </Switch>
                        </Layout.Content>
                    </Layout>
                </Layout>
            </div>
        );
    }
}
