import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export default function(props: { url: string, title: string }) {
    return <div className={"box"}>
        <Link 
            to={props.url}
            className={"button"}
            onMouseDown={(event) => { 
                if (event.preventDefault) event.preventDefault(); 
            }}
        >
            {props.title}
        </Link>
    </div>
}