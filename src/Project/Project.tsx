import React from 'react';
import './Project.css';

export default function(props: { url: string, name: string }) {
    return <a className={"link container"} href={props.url}>{props.name}</a>   
}