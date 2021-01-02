import React, { CSSProperties, HTMLProps } from "react";
import './badgecontainer.css';
import { Property } from 'csstype';

export interface BadgeProps extends HTMLProps<any> {
    columnize?: boolean,
    justify?: Property.JustifyContent,
    align?: Property.AlignItems
}

function BadgeContainer(props: BadgeProps) {
    let { children, columnize, style, height, justify, align, ...others} = props;
    let css: CSSProperties = { ...style, 
        flexDirection: !!columnize ? "column" : "row",
        height: height ?? "fit-content",
        justifyContent: justify ?? "center",
        alignItems: align ?? "center"
    };
    return <div {...others} style={css} className={"badge-container"}>
        {children}
    </div>
}

export default BadgeContainer;