
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { initializeApp } from 'firebase/app';
import { useState, useEffect, useContext, createContext } from 'react';

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyA0KELKCVPiXmFkPfo_dxpz9zzCnWwzvxU",
  authDomain: "soluxe-db210.firebaseapp.com",
  projectId: "soluxe-db210",
  storageBucket: "soluxe-db210.appspot.com",
  messagingSenderId: "661713123697",
  appId: "1:661713123697:web:52b14985e7e48b5db65ed0"
})

export const AuthContext = createContext()

export const AuthContextProvider = props => {
  const [user, setUser] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError)
    return () => unsubscribe()
  }, [])
  return <AuthContext.Provider value={{ user, error }} {...props} />
};

export const useAuthState = () => {
  const auth = useContext(AuthContext)
  return { ...auth, isAuthenticated: auth.user != null }
}