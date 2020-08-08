import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { getAllPosts } from '../services/BlogService';
import './Blog.css';

export default class Blog extends Component {

    componentDidMount() {   
        getAllPosts().then(out => ReactDOM.render(
            <HashRouter>{out}</HashRouter>, document.getElementById("blog-container")
        ));
    }

    public render() {
        return <div id="blog-container" />
    }
}
