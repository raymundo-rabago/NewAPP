
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AuthPage from './components/AuthPage';
import AdminPage from './components/AdminPage';
import RegisterPage from './components/RegisterPage';

export function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<AuthPage />} />
        <Route exact path="/admin" element={<AdminPage />} />
        <Route exact path="/registro" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
};