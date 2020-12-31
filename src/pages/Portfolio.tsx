import React from 'react';
import Markdown from 'react-markdown';
import './Portfolio.css';

export default function Portfolio() {

    let source = "# This area is still work in progress!\n### **Thank you for your interest, please check back later.**";
    
    return <div className={"portfolio-container"}>
        <Markdown source={source} />    
    </div>
}
