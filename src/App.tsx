import React from 'react';
import './App.css';
import Background from './Background/Background';
import sketch from "./Background/sketch"
import * as p5 from "p5";

class App extends React.Component {
  public render() {
    return <div className="App">
      <Background sketch={sketch} onP5Changed={this.onChanged}/>      
    </div>
  }

  private onChanged(p: p5) {
    console.log(p);
  }
}



export default App;
