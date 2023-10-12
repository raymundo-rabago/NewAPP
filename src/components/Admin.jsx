import React from 'react';

import { getAuth, signOut } from '../firebase/auth';
import { useAuthState } from 'firebase';

const Admin = () => {

  const { user } = useAuthState()

  return (
    <>
      <h1>Welcome {user?.name}</h1>
      <button onClick={() => signOut(getAuth())}>Cerrar Sesión</button>
    </>
  )
}

export default Admin;