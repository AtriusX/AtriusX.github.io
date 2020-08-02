import React from "react";
import './Landing.css';

export default class Landing extends React.Component {

    public render() {
        return <div id={"landing"}>
            <span className={"landing_text"}>Hey! I'm Atrius!</span>
            <span className={"description"}>This site is pretty empty right now. Check back later!</span>
        </div>
    }
}