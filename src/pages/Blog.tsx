import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import posts from '../posts/posts';
import { HashRouter } from 'react-router-dom';
import Blogpost from '../Blogpost/Blogpost';
import './Blog.css';

export default class Blog extends Component {

    componentDidMount() {        
        Promise.all(
            Object.entries(posts).map(([title, file]) => fetch(file).then(r => [title, r.text()]))
        ).then(data => {
            // Map all post data to components
            let posts = data.map(([title, content], index) => Promise.resolve(content).then(text => 
                <Blogpost key={index + 1} id={index + 1} title={title as string} text={text} />
            )).reverse();
            // Render all posts into the container
            Promise.all(posts).then(out => ReactDOM.render(
                <HashRouter>{out}</HashRouter>, document.getElementById("blog-container")
            ));
        });
    }

    public render() {
        return <div id="blog-container" />
    }
}
