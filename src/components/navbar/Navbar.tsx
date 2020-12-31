import React from 'react'
import { LinkProps, Route, RouteProps, Switch } from 'react-router-dom'
import './navbar.css';
import Link from '../link/Link';

export interface NavbarData {
    children?: React.ReactNode
};

export interface NavItemData extends RouteProps {
    text?: string
};

function Navigation(props: NavbarData) {
    let routes = Object.entries(props.children ?? []).map(([_, i]) => i) as Array<NavItem> 
    let items = routes.filter(a => a.props.text !== undefined);
    return <>
        <nav>
            <ul>
               {items}
            </ul>
        </nav>
        <Switch>
            {routes.map((e, i) =>
                <Route key={i} path={e.props.path} exact={e.props.exact} component={e.props.component} />
            )}
        </Switch>
    </>;
}

export class NavItem extends React.Component<NavItemData, NavItemData> {
    public render() {
        return <li>
            <Link to={this.props.path as string} text={this.props.text} />
        </li>
    }
}

export default Navigation;