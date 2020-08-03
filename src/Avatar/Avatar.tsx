import React from 'react';
import './Avatar.css';

export default function(props: { url: string }) {
    return <img 
        src={props.url} 
        alt={""}
        onMouseDown={(event) => { 
            if (event.preventDefault) event.preventDefault(); 
        }} 
    />
}