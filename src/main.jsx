import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';

import Login from './components/Login';
import Login from './components/Admin';

import WebFont from 'webfontloader';

import App from './App'
import Header from './Header'

import 'modern-normalize/modern-normalize.css'
import './index.scss'

WebFont.load({
  google: {
    families: ['Droid Sans', 'Playfair Display']
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <REACT.Fragment>
    <Header />
    <main>
      <App />
    </main>
    <footer>
      <p><small>Soluxe Sunglasses Boutique™ | ©copyright 2023</small></p>
    </footer>
  </REACT.Fragment>
);
