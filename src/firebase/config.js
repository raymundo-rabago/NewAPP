// https://github.com/tylermcginnis/react-router-firebase-auth/tree/master/src
// https://blog.logrocket.com/user-authentication-firebase-react-apps/

import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,
getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";
import { getFirestore, query, getDocs, collection, where, addDoc } from "firebase/firestore";


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

export const storage = getStorage();


// AUTH FUNCTIONS
export const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
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


// DATA FUNCTIONS
export async function fetchData(uid) {

  const lente = [];
  const q = query(collection(db, "lentes"), where("uid", "==", uid));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    const lente = { ...doc.data() };
    lente.docId = doc.id;
    console.log(lente);
    lentes.push(lente);

  });
  return lentes;

}

export async function insertNewLente(lente) {
  try {
    const lentesRef = collection(db, "lentes");
    const res = await addDoc(lentesRef, lentes);
    return res;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function deleteLente(docId) {
  await deleteDoc(doc(db, "lentes", docId));
}

export async function updateLente(docId, lente) {
  const res = await setDoc(doc(db, "lente", docId), lente);
  console.log("update lente", docId, lente, res);
}