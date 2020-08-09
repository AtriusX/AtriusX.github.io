import React from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import './Blogpost.css';

export default function(props: { id?: number, title: string, text: string }) {
    let out;
    if (props.id !== undefined) 
        out = <Link to={`/blog/${props.id}`} className={"blog-title"}>
            <h1>[{props.id}] {props.title}</h1>
        </Link> 
    else 
        out = <h1>{props.title}</h1>
    
    return <div key={props.id} className={"blogpost"}>
        {out}
        <br/>
        <div className={"blog-content"}>
            <Markdown source={props.text} />
        </div>
    </div>
}