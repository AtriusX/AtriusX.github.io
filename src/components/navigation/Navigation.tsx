import React, { Component, HTMLProps } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavItem from './navitem/NavItem';
import './navigation.css';

export {
    NavItem
}

export interface NavigationData extends HTMLProps<any> {
    background?: string;
    transparentScrolling?: boolean;
    startTransparent?: boolean;
    opacity?: number;
    solidPosition?: number
};

class Navigation extends Component<NavigationData, NavigationData> {
    private scrollElem?: Element;

    constructor(props: NavigationData) {
        super(props);
        this.state = {
            background: "transparent",
        };
    }

    componentDidMount() {
        if (!!this.props.transparentScrolling) {
            this.scrollElem = document.querySelector("#landing") ?? undefined;        
            this.scrollElem?.addEventListener('scroll', this.scroll.bind(this));
        }
    }

    private oldPosition: number = 0;
    private counter: number = 0;
    
    private scroll() {
        let breakpoint = (this.scrollElem?.scrollTop ?? 0);
        let { solidPosition, background } = this.props;
        this.setState({
            background: breakpoint > (solidPosition ?? 0) ? background : "transparent"
        });
    }

    render() {
        let { children, style, ...others } = this.props;
        let { background, opacity } = this.state;
        let routes = Object.entries(children ?? []).map(([_, i]) => i) as Array<NavItem> 
        let items = routes.filter(a => a.props.text !== undefined);
        let css = {
            ...style, background: background, opacity: opacity
        }
        return <>
            <nav { ...others } style={css}>
                <ul>
                   {items}
                </ul>
            </nav>
            <Switch>
                {routes.map((e, i) =>
                    <Route key={i} path={e.props.path} exact={e.props.exact} component={e.props.component} />
                )}
            </Switch>
        </>;    
    }
}

export default Navigation;