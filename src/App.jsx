
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AuthPage from './components/AuthPage';
import AdminPage from './components/AdminPage';
import AddSales from './components/AddSales';

export function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<AuthPage />} />
        <Route exact path="/admin" element={<AdminPage />} />
        <Route exact path="/add" element={<AddSales />} />
      </Routes>
    </Router>
  );
};