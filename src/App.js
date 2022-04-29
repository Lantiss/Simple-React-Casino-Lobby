import React from 'react';

import { Header, Footer } from './containers';
import { Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
      <Footer />
    </div>
  </div>
);

export default App;
