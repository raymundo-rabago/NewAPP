
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthPage } from './components/AuthPage';

export function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<AuthPage />} />
          <Route exact path="/reset" element={<ResetPage />} />
          <Route exact path="/admin" element={<Admin />} />
        </Routes>
      </Router>
  );
};