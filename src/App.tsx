import React from 'react';
import './App.css';
import Background from './Background/Background';
import sketch from "./Background/sketch"
import * as p5 from "p5";
import Navbar from './Navbar/Navbar';
import Landing from './Landing/Landing';

class App extends React.Component {
  public render() {
    return <>
      <Navbar />
      <Background 
        sketch={sketch} 
        onP5Changed={this.onChanged}
      />      
      <Landing />
    </>
  }

  private onChanged(p: p5) {
    console.log(p);
  }
}



export default App;
