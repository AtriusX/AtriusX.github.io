import React from 'react';
import './link.css';
import { Link as ReactLink, LinkProps } from 'react-router-dom';

export interface LinkData extends LinkProps {
    text?: string
}

export interface GenericEvent {
    preventDefault(): void
}

export let mouseDown = (e: GenericEvent) => e.preventDefault();

function Link(props: LinkData) {
    return <ReactLink to={props.to} style={props.style}
        className={`link ${props.className}`} onMouseDown={mouseDown}>{props.text}</ReactLink>
}

export function ExternalLink(props: LinkData) {
    return <a href={props.to.toString()} style={props.style} 
        className={`link ${props.className}`} onMouseDown={mouseDown}>{props.children} {props.text}</a>
}

export default Link;