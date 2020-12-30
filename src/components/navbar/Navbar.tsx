import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './navbar.css';
import Link from '../link/NavLink';
  
export type NavbarData = {
    icon?: string,
    children?: React.ReactNode
};

export type NavItemData = {
    text?: string, 
    path: string,
    component: React.ComponentType<any>,
    exact?: boolean,
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
        return <li className={'navItem'}>
            <Link path={this.props.path} text={this.props.text!!} />
        </li>
    }
}

export default Navigation;