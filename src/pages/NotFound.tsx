import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

export default function() {
    return <div className={"error-container"}>
        <h1>Uh oh! Look like you got lost!</h1>
        <br />
        <h4>Let's take you back <Link to={"/"}>home</Link>...</h4>
    </div>
}