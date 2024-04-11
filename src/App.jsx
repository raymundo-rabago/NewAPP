import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { AuthPage } from './components/AuthPage';

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

export function App() {
  return (
    <MantineProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={AuthPage} />
        </Switch>
      </Router>
    </MantineProvider>
  );
};