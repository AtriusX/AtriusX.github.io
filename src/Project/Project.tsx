import React from 'react';
import './Project.css';

export default function(props: { url: string, name: string }) {
    return <a 
        className={"link container"} 
        href={props.url} 
        onMouseDown={(event) => { 
            if (event.preventDefault) event.preventDefault(); 
        }}
    >
        {props.name}
    </a>   
}