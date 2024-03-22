
import "./index.scss";
import React from 'react';
import  { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Login from "./components/loginPage";
import Admin from "./components/Admin";


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/admin" element={<Admin/>} />
        </Routes>
      </Router>
  );
}

export default App;