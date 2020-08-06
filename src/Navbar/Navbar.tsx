import React from 'react';
import Github from '../Github/Github';
import Button from './Button/Button';

import './Navbar.css';

export default function() {
    return <div className={"navbar"}>
        <Github />
        <ul className={"options"}>
            <li><Button url={"/"} title={"Home"} /></li>
            <li><Button url={"/portfolio"} title={"Portfolio"} /></li>
            <li><Button url={"/blog"} title={"Blog"} /></li>
            <li><Button url={"/about"} title={"About Me"} /></li>
        </ul>
    </div>
}