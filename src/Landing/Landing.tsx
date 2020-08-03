import React from "react";
import './Landing.css';
import Project from "../Project/Project";
export default class Landing extends React.Component {

    public render() {
        return <div id={"landing"}>
            <span className={"landing_text"}>Hey! I'm Atrius!</span>
            <div className={"description"}>Check out some of the projects I've contributed to below~!</div>
            <Project url={"https://github.com/atriusx/dungeonkit"} name={"DungeonKit"}/>
            <Project url={"https://github.com/DV8FromTheWorld/JDA"} name={"JDA"}/>
        </div>
    }
}