import React from 'react';
import './Project.css';

export default function Project(props: { url: string, name: string }) {
    return <a 
        className={"container"} 
        href={props.url} 
        onMouseDown={(event) => { 
            if (event.preventDefault) event.preventDefault(); 
        }}
    >
        {props.name}
    </a>   
}