import React, { Component } from 'react';
import './About.css';
import Markdown from 'react-markdown';
export default class About extends Component<any, { about: string }> {
    constructor(props: any) {
        super(props);
        this.state = { about: "" };
    }

    componentWillMount() {
        let about = require('./About.md');
        fetch(about).then(r => r.text()).then(t => this.setState({ about: t }));
    }
    
    public render() {
        return <div className={"about-container"}>
            <Markdown source={this.state.about} />
        </div>
    }
}