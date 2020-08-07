import React, { Component } from 'react';
import Markdown from 'react-markdown';
import posts from '../posts/posts';

export default class Post extends Component<any, { title: string | undefined, post: JSX.Element | undefined }> {
    state = { title: undefined, post: undefined }
    
    componentDidMount() {
        const { match: { params }} = this.props;
        let id = params.id - 1;
        let entries = Object.entries(posts)
        // Ignore IDs that aren't valid
        if (entries[id] === undefined) {
            this.setState({ title: undefined, post: undefined });
            return;
        }
        // Process ID into post
        let [name, file] = entries[id];
        fetch(file).then(f => f.text()).then(text => this.setState({
            title: name, post: <Markdown source={text} />
        }));
    }

    public render() {
        if (this.state.post !== undefined) {
            return <div className={"blogpost"}>
                <h1>{this.state.title}</h1>
                <br/>
                {this.state.post}
            </div>
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