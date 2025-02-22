
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AuthPage from './components/AuthPage';
import VentasList from './components/VentasList';

export function App() {

  return (
    <Router future={{ v7_startTransition: true, }}>
      <Routes>
        <Route exact path="/" element={<AuthPage />} />
        <Route exact path="/home" element={<VentasList />} />
      </Routes>
    </Router>
  );
};