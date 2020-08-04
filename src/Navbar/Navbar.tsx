import React from 'react';
import Github from '../Github/Github';
import Button from './Button/Button';

import './Navbar.css';

export default function() {
    return <div className={"navbar"}>
        <Github />
        <div className={"options"}>
            <Button url={""} title={"Portfolio"} />
            <Button url={""} title={"Blog"} />
            <Button url={""} title={"About Me"} />
        </div>
    </div>
}