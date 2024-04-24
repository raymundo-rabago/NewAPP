
import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';

import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Theme appearance="light" accentColor="gray" radius="small" grayColor="slate" scaling="90%">
      <App />
    </Theme>
  </React.StrictMode>
);