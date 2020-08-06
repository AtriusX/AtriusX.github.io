import React from 'react';
import Github from '../Github/Github';
import Button from './Button/Button';

import './Navbar.css';

export default function() {
    return <div className={"navbar"}>
        <Github />
        <div className={"options"}>
            <Button url={"/"} title={"Home"} />
            <Button url={"/portfolio"} title={"Portfolio"} />
            <Button url={"/blog"} title={"Blog"} />
            <Button url={"/about"} title={"About Me"} />
        </div>
    </div>
}