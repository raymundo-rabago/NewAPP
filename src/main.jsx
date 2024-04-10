
import React from 'react';
import { createRoot, BrowserRouter } from 'react-dom/client';

import App from './App.jsx';

import React from "react";
import ReactDOM from "react-dom";

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);