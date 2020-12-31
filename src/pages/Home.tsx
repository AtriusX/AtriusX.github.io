import React from 'react';
import Project from '../Project/Project';
import Avatar from '../Avatar/Avatar';
import './Home.css';
import SupportBadge, { BadgeContainer } from '../components/supportbadge/SupportBadge';
import { IoLogoGithub, IoLogoPaypal, IoLogoTwitter } from 'react-icons/io5';

const grads = [
    "linear-gradient( 101.2deg,  rgba(247,0,0,1) -21.9%, rgba(164,50,237,1) 92.2% )",
    "linear-gradient( 123.9deg,  rgba(241,81,104,1) 34.2%, rgba(196,12,183,0.51) 100.1% )",
    "linear-gradient( 111.9deg,  rgba(0,81,146,1) 0.3%, rgba(14,250,255,1) 90% )",
    "radial-gradient( circle 933.4px at 0.9% -2.6%,  rgba(1,220,215,1) 0%, rgba(171,196,251,1) 47.6%, rgba(224,188,253,1) 72.8%, rgba(255,182,194,1) 100.3% )",
    "linear-gradient( 109.6deg,  rgba(243,118,118,1) 12.6%, rgba(191,159,237,1) 91.1% )",
    "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
    "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)",
    "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)"
];

export default function Home() {
    let test: Array<JSX.Element> = [];
    for (let i = 0; i < 50; i++) {
        test.push(<SupportBadge  icon={IoLogoPaypal} link="https://paypal.me/Atrius"
            look={grads[Math.floor(Math.random() * grads.length)]} flat={i % 2 === 0 ? true : undefined }>
            {i % 5 !== 0 ? "Please consider supporting Atri's work through Paypal!" : undefined}
        </SupportBadge>);
    }
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
    <BadgeContainer height="200em" justify="space-between" columnize>
        <SupportBadge icon={IoLogoTwitter} link="https://twitter.com/ImAtrius" buttonText="Follow"
            look={grads[Math.floor(Math.random() * grads.length)]}>
            Check out my twitter page!
        </SupportBadge>
        <SupportBadge  icon={IoLogoPaypal} link="https://paypal.me/Atrius"
            look={grads[Math.floor(Math.random() * grads.length)]}>
            Please consider supporting Atri's work through Paypal!
        </SupportBadge>
        <SupportBadge  icon={IoLogoGithub} link="https://github.com/AtriusX" buttonText="View"
            look={grads[Math.floor(Math.random() * grads.length)]}>
            Check out my github profile!
        </SupportBadge>
        <SupportBadge  icon={IoLogoTwitter} link="https://twitter.com/ImAtrius" buttonText="Follow"
            look={grads[Math.floor(Math.random() * grads.length)]}>
            Check out my twitter page!
        </SupportBadge>
        <SupportBadge  icon={IoLogoPaypal} link="https://paypal.me/Atrius"
            look={grads[Math.floor(Math.random() * grads.length)]}>
            Please consider supporting Atri's work through Paypal!
        </SupportBadge>
        <SupportBadge  icon={IoLogoPaypal} link="https://paypal.me/Atrius"
            look={grads[Math.floor(Math.random() * grads.length)]}>
            Please consider supporting Atri's work through Paypal!
        </SupportBadge>
        <SupportBadge  icon={IoLogoGithub} link="https://github.com/AtriusX" buttonText="View"
            look={grads[Math.floor(Math.random() * grads.length)]}>
            Check out my github profile!
        </SupportBadge>
        <SupportBadge  icon={IoLogoTwitter} link="https://twitter.com/ImAtrius" buttonText="Follow"
            look={grads[Math.floor(Math.random() * grads.length)]}>
            Check out my twitter page!
        </SupportBadge>
        <SupportBadge  icon={IoLogoGithub} link="https://github.com/AtriusX" buttonText="View"
            look={grads[Math.floor(Math.random() * grads.length)]}>
            Check out my github profile!
        </SupportBadge>
        <SupportBadge  icon={IoLogoTwitter} link="https://twitter.com/ImAtrius" buttonText="Follow"
            look={grads[Math.floor(Math.random() * grads.length)]}>
            Check out my twitter page!
        </SupportBadge>
        <SupportBadge  icon={IoLogoGithub} link="https://github.com/AtriusX" buttonText="View"
            look={grads[Math.floor(Math.random() * grads.length)]}>
            Check out my github profile!
        </SupportBadge>
        {test}
    </BadgeContainer>
  </div>
}