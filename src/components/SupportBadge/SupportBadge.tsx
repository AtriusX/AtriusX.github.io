import React, { HTMLProps } from 'react';
import { ExternalLink } from '../link/Link';
import './supportbadge.css';
import { IconType } from 'react-icons';
import BadgeContainer from './badgecontainer/BadgeContainer';

export {
    BadgeContainer
}

export interface BadgeData extends HTMLProps<any> {
    icon?: IconType;
    buttonText?: string;
    link: string;
    className?: string;
    look?: string;
    flat?: boolean;
    flatText?: boolean;
}

function SupportBadge(props: BadgeData) {
    let { look, style, link, buttonText, className, children, width, flat, flatText, icon, ...others } = props;
    let css = { 
        backgroundImage: look, 
        boxShadow: !flat ? "0 0px 60px -20px #000" : undefined,
        textShadow: !flatText ? "0 0 5px #333": undefined 
    };
    let Icon = props.icon
    let classes = `badge ${className}`;
    let content = <>
        <p>{children}</p>
        <br/>
    </>
    return (
        <div {...others} style={{...css, ...style, width: width ?? "fit-content"}} className={classes}>
            {children !== undefined ? content : ""}
            <ExternalLink style={css} className={"support"} to={link} text={buttonText ?? "Support"}> 
                {Icon !== undefined ? <Icon className={"logo"} size="1.5em"/> : ""}
            </ExternalLink>
        </div>
    )
}

export default SupportBadge;