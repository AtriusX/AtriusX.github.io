import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import posts from '../posts/posts';
import Markdown from 'react-markdown';
import './Blog.css';

export default class Blog extends Component<any, [{ name: string, content: string }]> {
    
    componentWillMount() {
        let entries = Object.entries(posts);
        let i = entries.length;
        Promise.all(
            entries.reverse().map(([title, file]) => fetch(file).then(r => [title, r.text()]))
        ).then(data => {
            let p = data.map(([title, content]) =>
                Promise.resolve(content).then(text =>
                    <div key={i--} className={"blogpost"}>
                        <h1>{title}</h1>
                        <Markdown source={text} />
                    </div>
                )
            )
            Promise.all(p).then(out => {
                ReactDOM.render(<>{out}</>, document.getElementById("blog-container"));
            })
        });
    }

    public render() {
        return <div id="blog-container" />
    }
}
