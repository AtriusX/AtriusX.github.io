import p5 from "p5";
import * as React from "react";
import { Component, RefObject } from "react";

export interface IProps {
  id?: string;
  sketch: (sketch: p5) => void;
  onP5Changed?: (sketch: p5) => void;
}

export default class P5Wrapper extends Component<IProps, {}> {
  public canvas!: p5;
  private wrapper: RefObject<HTMLDivElement> = React.createRef();

  public componentDidMount() {
    this.setSketch(this.props);
  }

  public componentDidUpdate(newprops: IProps) {
    if (this.props.sketch !== newprops.sketch) {
      this.setSketch(newprops);
    }
  }

  public render() {
    return <div ref={this.wrapper} />;
  }

  private setSketch(props: IProps) {
    const current = this.wrapper.current || document.getElementById(this.props.id!!);
    if (current) {
      if (current.childNodes[0]) {
        current.removeChild(current.childNodes[0]);
      }
      this.canvas = new p5(props.sketch, current);
      if (props.onP5Changed) {
        props.onP5Changed(this.canvas);
      }
    }
  }
}