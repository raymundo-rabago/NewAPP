// https://github.com/tylermcginnis/react-router-firebase-auth/tree/master/src
// https://blog.logrocket.com/user-authentication-firebase-react-apps/

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";
import { getFirestore, collection, getDocs, onSnapshot, addDoc, deleteDoc, doc, getDoc, updateDoc, } from "firebase/firestore";
import { toast } from 'sonner';

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


// CRUD FUNCTIONS
export const saveProduct = (title, description) => addDoc(collection(db, "Ventas"), { title, description });
export const onGetProduct = (callback) => onSnapshot(collection(db, "Ventas"), callback);
export const deleteProduct = (id) => deleteDoc(doc(db, "Ventas", id));
export const getProduct = (id) => getDoc(doc(db, "Ventas", id));
export const updateProduct = (id, newFields) => updateDoc(doc(db, "Ventas", id), newFields);
export const getProducts = () => getDocs(collection(db, "Ventas"));