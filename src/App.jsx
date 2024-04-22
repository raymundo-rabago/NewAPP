
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AuthPage from './components/AuthPage';
import ResetPage from './components/ResetPage';
import ResetPage from './components/AddProduct';
import AdminPage from './components/AdminPage';




export function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<AuthPage />} />
        <Route exact path="/reset" element={<ResetPage />} />
        <Route exact path="/registro" element={<AddProduct />} />
        <Route exact path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
};