import React from 'react';
import Project from '../Project/Project';
import Avatar from '../Avatar/Avatar';
import './Home.css';
import SupportBadge from '../components/SupportBadge/SupportBadge';
import { IoLogoPaypal, IoLogoYoutube, IoCashSharp } from 'react-icons/io5';

export default function Home() {
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
    <SupportBadge icon={IoCashSharp} link="https://paypal.me/Atrius" className={"paypal"} 
        look="radial-gradient( circle farthest-corner at 12.3% 19.3%,  rgba(85,88,218,1) 0%, rgba(95,209,249,1) 100.2% )">
        Hello world!
    </SupportBadge>
  </div>
}