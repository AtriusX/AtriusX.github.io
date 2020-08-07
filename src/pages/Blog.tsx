import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import posts from '../posts/posts';
import Markdown from 'react-markdown';
import './Blog.css';
import { Link, HashRouter } from 'react-router-dom';

export default class Blog extends Component {

    componentDidMount() {        
        let entries = Object.entries(posts).reverse();
        let i = entries.length;
        Promise.all(
            entries.map(([title, file]) => fetch(file).then(r => [title, r.text()]))
        ).then(data => {
            // Map all post data to components
            let posts = data.map(([title, content]) =>
                Promise.resolve(content).then(text => this.generate(i--, title as string, text))
            );
            // Render all posts into the container
            Promise.all(posts).then(out => ReactDOM.render(
                <HashRouter>{out}</HashRouter>, document.getElementById("blog-container")
            ));
        });
    }

    generate(key: number, title: string, text: string) {
        return <div key={key} className={"blogpost"}>
            <Link to={`/blog/${key}`} className={"blog-title"}>
                <h1>{title}</h1>
            </Link>
            <br/>
            <Markdown source={text} />
        </div>
    }

    public render() {
        return <div id="blog-container" />
    }
}
