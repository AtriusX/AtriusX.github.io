import React, { CSSProperties, HTMLProps } from "react";
import { ExternalLink } from "../link/Link";
import "./footer.css";

export type FooterItem = {
    text: string,
    link: string
}

export interface FooterData extends HTMLProps<any> {
    links?: Array<FooterItem>;
    background?: string;
    icon?: string;
    rightBias?: boolean;
}

function Footer(props: FooterData) {
    let { links, background, icon, rightBias, height, ...others } = props;
    let css: CSSProperties = {
        background: background ?? "#121212",
        height: height
    }
    let left: Array<FooterItem> = [], right: Array<FooterItem> = [];
    links?.forEach((e, i) =>
        (i % 2 === 0) !== !!rightBias ? left.push(e) : right.push(e)
    );
    let img = !!icon ? <img src={icon} alt="logo" /> : undefined;
    return <footer {...others} style={css} id="footer">
        <ul>
            {link(left)}
        </ul>
        {img}
        <ul>
            {link(right)}
        </ul>
    </footer>;
}

function link(items: Array<FooterItem>) {
    return items.map((e, i) => <li key={i}><ExternalLink to={e.link} text={e.text} /></li>);
}

export default Footer;