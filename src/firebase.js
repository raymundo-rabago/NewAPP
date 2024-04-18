// https://github.com/tylermcginnis/react-router-firebase-auth/tree/master/src
// https://blog.logrocket.com/user-authentication-firebase-react-apps/

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";
import { getFirestore, collection, getDocs, onSnapshot, addDoc, deleteDoc, doc, getDoc, updateDoc, } from "firebase/firestore";

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
export const db = getFirestore();

// AUTH FUNCTIONS
export const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const logout = async () => {
  await signOut(auth);
};

// USERS FUNCTIONS
export async function getUserInfo(uid) {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}

export async function getUserPublicProfileInfo(uid) {
  const profileInfo = await getUserInfo(uid);
  const linksInfo = await fetchLinkData(uid);
  return {
    profile: profileInfo,
    links: linksInfo,
  };
}

// CRUD FUNCTIONS
export const saveProduct = (title, description) => addDoc(collection(db, "ventas"), { title, description });
export const onGetProduct = (callback) => onSnapshot(collection(db, "ventas"), callback);
export const deleteProduct = (id) => deleteDoc(doc(db, "ventas", id));
export const getProduct = (id) => getDoc(doc(db, "ventas", id));
export const updateProduct = (id, newFields) => updateDoc(doc(db, "ventas", id), newFields);
export const getProducts = () => getDocs(collection(db, "ventas"));