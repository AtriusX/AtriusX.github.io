import './icon.css';
import React from 'react';
import { GenericEvent } from '../link/NavLink';

type IconData = {
    src: string,
    alt?: string,
    link?: string
}

function Icon(props: IconData) {
    let mouseDown = (e: GenericEvent) => e.preventDefault();
    return <a className="icon" href={props.link}>
        <img draggable={false} src={props.src} alt={props.alt} onMouseDown={mouseDown} />
    </a>
}

export default Icon;
