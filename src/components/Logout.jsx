import React from 'react';
import { auth, logout } from "../firebase";

import { FiPower } from "react-icons/fi";

const Logout = () => {
  return (
	 <>
      <a onClick={logout} className="btn_logout"><FiPower /> Salir</a>
   </>
  )
}

export default Logout