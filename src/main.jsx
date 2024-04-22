
import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';

import { GeistProvider, CssBaseline } from '@geist-ui/core';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <GeistProvider>
      <CssBaseline />
      <App />
    </GeistProvider>
  </React.StrictMode>
);