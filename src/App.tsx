import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Post from './pages/Post';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Background from './Background/Background';
import sketch from "./Background/sketch"
import Navbar from './Navbar/Navbar';

export default function() {
  return <>
    <Background 
      sketch={sketch} 
      onP5Changed={ p => console.log(p) }
    />
    <Navbar />
    <Switch>
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/portfolio"} component={Portfolio} />
      <Route exact path={"/blog"} component={Blog} />
      <Route path={"/blog/:id"} component={Post} />
      <Route exact path={"/about"} component={About} />
      <Route path={"*"} component={NotFound} />
    </Switch>
  </>
}