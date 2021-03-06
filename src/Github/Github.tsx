import './Github.css';
import logo from './github.png';
import React from 'react';

export default function() {
    return <a className="github" href={"https://github.com/AtriusX"}>
        <img 
            draggable={false}
            src={logo} 
            alt={"Github"} 
            onMouseDown={(event) => { 
                if (event.preventDefault) event.preventDefault(); 
            }} 
        />
    </a>
}
