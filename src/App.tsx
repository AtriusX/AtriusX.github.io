import React from 'react';
import './App.css';
import Background from './Background/Background';
import sketch from "./Background/sketch"
import * as p5 from "p5";
import Navbar from './Navbar/Navbar';
import Landing from './Landing/Landing';

export default function() {
  return <>
    <Navbar />
    <Background 
      sketch={sketch} 
      onP5Changed={onChanged}
    />      
    <Landing />
  </>
}

function onChanged(p: p5) {
  console.log(p);
}
