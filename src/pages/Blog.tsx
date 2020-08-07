import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import posts from '../posts/posts';
import Markdown from 'react-markdown';
import './Blog.css';
import { Link, HashRouter } from 'react-router-dom';

export default class Blog extends Component {

    componentDidMount() {        
        let entries = Object.entries(posts);
        let i = entries.length;
        Promise.all(
            entries.reverse().map(([title, file]) => fetch(file).then(r => [title, r.text()]))
        ).then(data => {
            let p = data.map(([title, content]) =>
                Promise.resolve(content).then(text =>
                    <div key={i} className={"blogpost"}>
                        <Link 
                            to={`/blog/${i--}`} 
                            className={"blog-title"}
                        >
                            <h1>{title}</h1>
                        </Link>
                        <br/>
                        <Markdown source={text} />
                    </div>
                )
            );
            Promise.all(p).then(out => {
                ReactDOM.render(<HashRouter>{out}</HashRouter>, document.getElementById("blog-container"));
            });
        });
    }

    public render() {
        return <div id="blog-container" />
    }
}
