// https://github.com/tylermcginnis/react-router-firebase-auth/tree/master/src
// https://blog.logrocket.com/user-authentication-firebase-react-apps/
// https://github.com/GoZaddy/Firebase-auth-article

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { toast } from 'sonner';

let instance;

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// AUTH FUNCTIONS
export const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    toast.error('Error de Autenticación... intentalo de nuevo');
    //alert(err.message);
  }
};

export const logout = async () => {
  await signOut(auth);
};
