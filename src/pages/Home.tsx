import React from 'react';
import Project from '../Project/Project';
import Avatar from '../Avatar/Avatar';
import './Home.css';

export default function() {
  return <div id={"landing"}>
    <span className={"landing_text"}>
        Hey! I'm Atrius!
    </span>
    <Avatar
        url={"https://avatars0.githubusercontent.com/u/7331441?s=460&u=d4025a5731648accb32ec70057dc1df5e514a588&v=4"}
    />
    <p className={"description"}>
        Check out some of the projects I've contributed to below~!
    </p>
    <Project 
        url={"https://github.com/atriusx/dungeonkit"} name={"DungeonKit"}
    />
    <Project 
        url={"https://github.com/DV8FromTheWorld/JDA"} name={"JDA"}
    />
  </div>
}