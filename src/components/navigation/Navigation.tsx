import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NavItem from './navitem/NavItem';
import './navigation.css';

export {
    NavItem
}

export interface NavigationData {
    children?: React.ReactNode
};

function Navigation(props: NavigationData) {
    let routes = Object.entries(props.children ?? []).map(([_, i]) => i) as Array<NavItem> 
    let items = routes.filter(a => a.props.text !== undefined);
    return <>
        <nav>
            <ul>
               {items}
            </ul>
        </nav>
        <div className="padding"></div>
        <Switch>
            {routes.map((e, i) =>
                <Route key={i} path={e.props.path} exact={e.props.exact} component={e.props.component} />
            )}
        </Switch>
    </>;
}

export default Navigation;