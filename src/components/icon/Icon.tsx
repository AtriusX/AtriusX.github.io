import './icon.css';
import React from 'react';

type IconData = {
    src: string,
    alt?: string,
    link?: string
}

function Icon(props: IconData) {
    return <a className="icon" href={props.link}>
        <img draggable={false} src={props.src} alt={props.alt} />
    </a>
}

export default Icon;
