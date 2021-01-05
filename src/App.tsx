import React from 'react';
import './App.css';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Post from './pages/Post';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Navigation, { NavItem } from './components/navigation/Navigation';

export default function App() {
  return <Navigation ref={React.createRef()} background={"#121212"} transparentScrolling startTransparent>
    <NavItem text="Home" path="/" component={Home} exact />
    <NavItem text="Portfolio" path="/portfolio" component={Portfolio} exact />
    <NavItem text="Blog" path="/blog" component={Blog} exact />
    <NavItem path="/blog/:id" component={Post} />
    <NavItem text="About" path="/about" component={About} exact />
    <NavItem path="*" component={NotFound} />
  </Navigation>
}
    /* <Background 
      sketch={sketch} 
      onP5Changed={ p => console.log(p) }
    /> */