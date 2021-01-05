import React, { Component, CSSProperties, HTMLProps } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
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

class ExperienceBar extends Component<ExperienceData, { width: number }> {

    constructor(props: ExperienceData) {
        super(props);
        this.state = {
            width: 0
        }
    }

    render() {
        let { topic, startDate, color, rounded, keepOpen, children, open,...others } = this.props;
        let progress: CSSProperties = {
            width: this.state.width,
            background: color || "#37ecba",
            borderRadius: !!rounded ? "10em" : undefined
        };
        let [width, years, start] = this.getData(startDate);
        return <ReactVisibilitySensor partialVisibility onChange={v => v ? this.updateWidth(width) : undefined}>
            <div {...others} className={"experience-bar"}>
                <div className="flex-container">
                    <p className="topic">{topic}</p>
                    <p className="start">{`Started in ${start}`}</p>
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
        </ReactVisibilitySensor>
    }

    private getData(startDate: string): [number, number, number] {
        let now = new Date(), then = new Date(startDate), yearOf = new Date(then.getFullYear(), 0, 0);
        let days = daysBetween(now, then);
        let padding = 365 - daysBetween(then, yearOf);
        let width = Math.ceil((padding * YEAR_WIDTH_RATIO) + (days / 365));
        let years = Math.floor(days / 365);
        return [width, years, then.getFullYear()];
    }

    private updateWidth(width: number) {
        this.setState({
            width: width
        })
    }
}

function daysBetween(now: Date, then: Date): number {
    let difference = now.getTime() - then.getTime();
    return Math.ceil(difference / (1000 * 60 * 60 * 24));
}

export default ExperienceBar;