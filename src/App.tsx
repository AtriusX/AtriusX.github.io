import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import About from './pages/About';
import Background from './Background/Background';
import sketch from "./Background/sketch"
import Navbar from './Navbar/Navbar';

const url = process.env.PUBLIC_URL;

export default function() {
  return <>
    <Background 
    sketch={sketch} 
    onP5Changed={ p => console.log(p) }
    />
    <Navbar />
    <Switch>
      <Route exact path={"/"} component={Home} />
      <Route exact path={`${url}/portfolio`} component={Portfolio} />
      <Route exact path={`${url}/blog`} component={Blog} />
      <Route exact path={`${url}/about`} component={About} />
    </Switch>
  </>
}