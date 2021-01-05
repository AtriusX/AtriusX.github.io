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
};

class Navigation extends Component<NavigationData, NavigationData> {
    private scrollElem?: Element;

    constructor(props: NavigationData) {
        super(props);
        this.state = {
            background: props.background,
            opacity: props.opacity
        };
    }

    componentDidMount() {
        if (!!this.props.transparentScrolling) {
            this.scrollElem = document.querySelector("#landing") ?? undefined;        
            this.scrollElem?.addEventListener('scroll', this.scroll.bind(this));
            if (!!this.props.startTransparent) {
                this.setState({
                    background: "transparent"
                })
            }
        }
    }

    private oldPosition: number = 0;
    private counter: number = 0;
    scroll() {
        let { background } = this.props;
        let temp = this.scrollElem?.scrollTop ?? 0;
        if (temp > this.oldPosition) {
            if (this.counter > 5) {
                this.setState({
                    opacity: 0,
                });
            } else {
                this.counter++;
            }
        } else {
            this.setState({
                opacity: 1,
                background: background
            });
            this.counter = 0;
        }
        this.oldPosition = temp;

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