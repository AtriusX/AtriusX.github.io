import React from 'react';
import { RouteProps } from 'react-router-dom';
import Link from '../../link/Link'

export interface NavItemData extends RouteProps {
    text?: string
};

class NavItem extends React.Component<NavItemData, NavItemData> {
    public render() {
        return <li className="nav-item">
            <Link to={this.props.path as string} text={this.props.text} />
        </li>
    }
}

export default NavItem;