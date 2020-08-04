import React from 'react';
import './Button.css';

export default function(props: { url: string, title: string }) {
    return <div className={"box"}>
        <a 
            href={props.url} 
            className={"button"}
            onMouseDown={(event) => { 
                if (event.preventDefault) event.preventDefault(); 
            }} 
        >
            {props.title}
        </a>
    </div>
}