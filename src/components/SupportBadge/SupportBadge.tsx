import React, { HTMLProps } from 'react';
import { ExternalLink } from '../link/Link';
import './supportbadge.css';
import { IconType } from 'react-icons';
export interface PaypalData extends HTMLProps<any> {
    icon?: IconType,
    buttonText?: string,
    link: string,
    className?: string,
    look?: string
}

function Paypal(props: PaypalData) {
    let { look, style, link, buttonText, className, children, ...others } = props;
    let css = { backgroundImage: look };
    let Icon = props.icon
    let classes = `badge ${className}`;
    let content = <>
        <p>{children}</p>
        <br/>
    </>
    
    return (
        <div {...others} style={{...css, ...style}} className={classes}>
            {children !== undefined ? content : ""}
            <ExternalLink style={css} className={"support"} to={link} text={buttonText ?? "Support"}> 
                {Icon !== undefined ? <Icon className={"logo"} size="1.5em"/> : ""}
            </ExternalLink>
        </div>
    )
}

export default Paypal;