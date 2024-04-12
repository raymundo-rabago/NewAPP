
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthPage from './components/AuthPage';
import ResetPage from './components/ResetPage';
import AdminPage from './components/AdminPage';

import { MantineProvider } from '@mantine/core';

import '@mantine/core/styles.css';


export function App() {
  return (
    <MantineProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<AuthPage />} />
          <Route exact path="/reset" element={<ResetPage />} />
          <Route exact path="/admin" element={<AdminPage />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
};