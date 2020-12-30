import React from 'react';
import './navlink.css';
import { Link } from 'react-router-dom';

export type LinkData = {
    path: string,
    text: string
}

export type GenericEvent = {
    preventDefault: Function
}

function NavLink(props: LinkData) {
    let mouseDown = (e: GenericEvent) => e.preventDefault();
    return <Link to={props.path} className={"link"} onMouseDown={mouseDown}>{props.text}</Link>
}

export default NavLink;