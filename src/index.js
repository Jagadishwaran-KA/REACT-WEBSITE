import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  App from "./App.js";
import Hero from "./Hero.js";
import Design from "./design.js";
import Projects  from './Projects';
import Contact from './Contact';
import Skills from './Skills';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <App />
  <Hero />
  <Design />
  <Projects />
  <Skills />
  <Contact />
  </>

);



