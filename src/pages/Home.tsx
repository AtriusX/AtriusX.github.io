import React from 'react';
import './Home.css';
import SupportBadge, { BadgeContainer } from '../components/supportbadge/SupportBadge';
import { IoLogoGithub, IoLogoPaypal, IoLogoSoundcloud, IoLogoTwitter } from 'react-icons/io5';
import ExperienceBar, { ExperienceItem } from '../components/experiencebar/ExperienceBar';
import Typed from 'react-typed';
import Granim from 'react-granim';
import Sketch from 'react-p5';
import { draw, setup, resized } from '../Background/sketch';
import Footer from '../components/footer/Footer';
import icon from '../logo.png';
import Navigation from '../components/navigation/Navigation';

const grads = [
  "linear-gradient( 101.2deg,  rgba(247,0,0,1) -21.9%, rgba(164,50,237,1) 92.2% )",
  // "linear-gradient( 123.9deg,  rgba(241,81,104,1) 34.2%, rgba(196,12,183,0.51) 100.1% )",
  // "linear-gradient( 111.9deg,  rgba(0,81,146,1) 0.3%, rgba(14,250,255,1) 90% )",
  // "radial-gradient( circle 933.4px at 0.9% -2.6%,  rgba(1,220,215,1) 0%, rgba(171,196,251,1) 47.6%, rgba(224,188,253,1) 72.8%, rgba(255,182,194,1) 100.3% )",
  // "linear-gradient( 109.6deg,  rgba(243,118,118,1) 12.6%, rgba(191,159,237,1) 91.1% )",
  // "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
  // "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)",
  // "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)",
  // "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
  // "linear-gradient(167deg, #FFFFFF 0%, #6284FF 50%, #FF0000 100%)",
  // "radial-gradient(circle at 43.88% 39.4%, #009764 0, #009875 3.33%, #009886 6.67%, #009996 10%, #0099a7 13.33%, #0098b6 16.67%, #0098c5 20%, #0097d2 23.33%, #0095de 26.67%, #0093e7 30%, #0090ef 33.33%, #008df5 36.67%, #0089f8 40%, #0084f8 43.33%, #007ef6 46.67%, #3c78f2 50%, #6971eb 53.33%, #8769e3 56.67%, #9f61d8 60%, #b258cc 63.33%, #c24fbe 66.67%, #cf46af 70%, #d93ea0 73.33%, #e03890 76.67%, #e53580 80%, #e7356f 83.33%, #e7395f 86.67%, #e53f50 90%, #e14640 93.33%, #db4e31 96.67%, #d45721 100%)",
  // "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
  // "linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%)"
];

export interface HomeData {
  navigation?: Navigation
}

export default function Home(props: HomeData) {
  return <div id={"landing"}>
    <div className="gradient">
      <Granim stateTransitionSpeed={0} id="gradient" />
      <Sketch setup={setup} draw={draw} windowResized={resized} className="sketch" />
      <Typed className="landing-text" typeSpeed={40} startDelay={500} fadeOut fadeOutDelay={1000} showCursor={false} strings={[
        "Hey! I'm Atri!", "Feel free to look around!"
      ]} />
    </div>
    <BadgeContainer height="20em" justify="space-between" columnize>
        <SupportBadge icon={IoLogoSoundcloud} link="https://soundcloud.com/atriusedm/apex" buttonText="Stream Apex" flatText
          look={grads[0]}>
          Follow me on snodclod!
        </SupportBadge>
        <SupportBadge icon={IoLogoPaypal} link="https://paypal.me/Atrius" flatText
          look={grads[Math.floor(Math.random() * grads.length)]}>
          Please consider supporting Atri's<br/> work through Paypal!
        </SupportBadge>
        <SupportBadge icon={IoLogoTwitter} link="https://twitter.com/ImAtrius" buttonText="Follow" flatText
          look={grads[Math.floor(Math.random() * grads.length)]}>
          Check out my twitter page!
        </SupportBadge>
        <SupportBadge icon={IoLogoGithub} link="https://github.com/AtriusX" buttonText="View" flatText
          look={grads[Math.floor(Math.random() * grads.length)]}>
          Check out my github profile!
        </SupportBadge>
      </BadgeContainer>
      <div className="test" style={{
        display: "flex",
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        alignItems: "start",
        width: "80%",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        paddingBottom: "1em"
      }}>
        <ExperienceBar startDate="7/15/2017" topic="Kotlin">
          <ExperienceItem text="DungeonKit" to="https://github.com/atriusx/dungeonkit" />
        </ExperienceBar>
        <ExperienceBar startDate="9/10/2013" topic="Java" keepOpen open>
          <ExperienceItem text="JDA" to="https://github.com/DV8FromTheWorld/JDA" />
          <ExperienceItem text="Spigot/Paper" />
        </ExperienceBar>
        <ExperienceBar startDate="6/10/2019" topic="Typescript">
          <ExperienceItem text="React" />
        </ExperienceBar>
        <ExperienceBar startDate="5/13/2017" topic="Javascript" open rounded>
          <ExperienceItem text="React" />
        </ExperienceBar>
        <ExperienceBar startDate="9/1/2010" topic="HTML" />
        <ExperienceBar startDate="9/8/2010" topic="CSS" />
      </div>
      <Footer icon={icon} links={[
        { text: "Soundcloud", link: "https://soundcloud.com/AtriusEDM"},
        { text: "Github", link: "https://github.com/AtriusX"},
        { text: "Twitter", link: "https://twitter.com/ImAtrius"},
      ]}/>
    </div>
}