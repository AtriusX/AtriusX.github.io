import React, { Component } from 'react';
import { getPost } from '../services/BlogService';
import NotFound from './NotFound';

export default class Post extends Component<any, { post?: JSX.Element }> {
    state = { post: undefined } // Default state for post component

    componentDidMount() {
        const { match: { params } } = this.props;
        getPost(params.id - 1)
            .then(post => this.setState({ post: post }));
    }

    componentDidUpdate(prevProps: any) {
        if (this.props.location !== prevProps.location)
            this.componentDidMount();
    }

    public render() {
        return <>{this.state.post !== undefined ? this.state.post : <NotFound />}</>
    }
}