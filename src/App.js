import React from 'react';
import './App.css';
import { Brand, CTA, Navbar} from './components';
import { Blog, Features, Possibility, Footer, Header, WhatGPT3 } from './containers';

function App() {
  return (
    <div className='App'>
      <div className='gradient_bg'>
         <Navbar/>
         <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
