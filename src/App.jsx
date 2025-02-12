
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AuthPage from './components/AuthPage';
import Listing from './components/Listing';

export function App() {

  return (
    <Router future={{ v7_startTransition: true, }}>
      <Routes>
        <Route exact path="/" element={<AuthPage />} />
        <Route exact path="/home" element={<Listing />} />
      </Routes>
    </Router>
  );
};