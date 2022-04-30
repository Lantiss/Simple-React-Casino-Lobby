import React from 'react';

import { Header, Footer } from './containers';
import { Navbar, Games } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
      <Games/>
      <Footer />
    </div>
  </div>
);

export default App;
