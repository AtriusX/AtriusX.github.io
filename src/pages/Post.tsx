import React, { Component } from 'react';
import posts from '../posts/posts';
import Blogpost from '../Blogpost/Blogpost';

export default class Post extends Component<any, { post: JSX.Element | undefined }> {
    state = { post: undefined }

    componentDidMount() {
        const { match: { params }} = this.props;
        let id = params.id - 1;
        let entries = Object.entries(posts)
        // Ignore IDs that aren't valid
        if (entries[id] === undefined) {
            this.setState({ post: undefined });
            return;
        }
        // Process ID into post
        let [name, file] = entries[id];
        fetch(file).then(f => f.text()).then(text => this.setState({
            post: <Blogpost title={name} text={text} />
        }));
    }

    public render() {
        if (this.state.post !== undefined) {
            return <> 
                {this.state.post}
            </>
        } else {
            return <> 404 </>
        }
    }

    componentDidUpdate(prevProps: any) {
        if (this.props.location !== prevProps.location) {
            this.componentDidMount()
        }
    }
}