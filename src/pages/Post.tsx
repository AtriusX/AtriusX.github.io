import React, { Component } from 'react';
import { validPostID, getPost } from '../services/BlogService';

export default class Post extends Component<any, { post: JSX.Element | undefined }> {
    state = { post: undefined } // Default state for post component

    componentDidMount() {
        const { match: { params }} = this.props;
        let id = params.id - 1;
        // Ignore IDs that aren't valid
        if (!validPostID(id)) {
            this.setState({ post: undefined });
            return;
        }
        // Process ID into post
        getPost(id).then(post => this.setState({ post: post }));
    }

    componentDidUpdate(prevProps: any) {
        if (this.props.location !== prevProps.location) {
            this.componentDidMount()
        }
    }

    public render() {
        return <>
            {this.state.post !== undefined ? this.state.post : undefined }
        </>
    }
}