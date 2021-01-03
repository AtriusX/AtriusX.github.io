import React from 'react';
import { ExternalLink } from '../../link/Link';

interface ExprienceItemData {
    text: string,
    to?: string
}

function ExperienceItem(props: ExprienceItemData) {
    let { to, text } = props;
    return <li style={{
        listStyle: !!to ? "square" : undefined
    }}>
        {!!to ? <ExternalLink to={to} text={text} /> : <p>{text}</p>}  
    </li>
}

export default ExperienceItem;