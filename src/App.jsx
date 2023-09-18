
import { Routes, Route } from "react-router-dom"

import Login from './components/Login';
import Admin from './components/Admin';

const App = () => {
  return (
    <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="admin" element={ <Admin /> } />
    </Routes>
  )
}

export default App;
