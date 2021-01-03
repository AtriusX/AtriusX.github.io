import React, { CSSProperties, HTMLProps } from "react";
import "./experiencebar.css";
import ExperienceItem from './experienceitem/ExperienceItem';

export {
    ExperienceItem
}

export interface ExperienceData extends HTMLProps<any> {
    topic: string;
    startDate: string;
    color?: string;
    rounded?: boolean;
    keepOpen?: boolean;
}

const YEAR_WIDTH_RATIO = 100 / 365;

function ExperienceBar(props: ExperienceData) {
    let { topic, startDate, color, rounded, keepOpen, children, open,...others } = props;
    let now = new Date(), then = new Date(startDate), yearOf = new Date(then.getFullYear(), 0, 0);
    let days = daysBetween(now, then);
    let padding = 365 - daysBetween(then, yearOf);
    let width = Math.ceil((padding * YEAR_WIDTH_RATIO) + (days / 365));
    let years = Math.floor(days / 365);    
    let progress: CSSProperties = {
        width: `${width}%`,
        background: color || "#37ecba",
        borderRadius: !!rounded ? "10em" : undefined
    };
    return <div {...others} className={"experience-bar"}>
        <div className="flex-container">
            <p className="topic">{topic}</p>
            <p className="start">{`Started in ${then.getFullYear()}`}</p>
        </div>
        <div className="bar">
            <p className="time">{years}</p>
            <span style={progress} className="progress"></span>
        </div>
        {!!children ? <details className={`tech ${!!keepOpen ? "keep-open" : ""}`} open={open}>
            <summary>Related</summary>
            <ul className="tect-items">
                {children}
            </ul>
        </details> : ""}
    </div>
}

function daysBetween(now: Date, then: Date): number {
    let difference = now.getTime() - then.getTime();
    return Math.ceil(difference / (1000 * 60 * 60 * 24));
}

export default ExperienceBar;