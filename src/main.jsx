
import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';

import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

const theme = createTheme({
  fontFamily: 'system-ui, sans-serif',
  defaultRadius: 0,
  white: 'GhostWhite';
  primaryColor: 'DarkGoldenRod',
  headings: {
    fontFamily: 'Didot, Bodoni MT, Noto Serif Display, URW Palladio L, P052, Sylfaen, serif';
    fontWeight: '400';
  };
});

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);