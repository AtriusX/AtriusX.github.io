import React from 'react';
import './Project.css';

export default function(props: { url: string, name: string }) {
    return <div className={"container"}>
        <a className={"link"} href={props.url}>{props.name}</a>
    </div>
}