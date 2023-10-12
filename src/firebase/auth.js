import { ref, firebaseAuth } from './config';

import { getAuth, signOut } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export function auth (email, pw) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then(saveUser)
}

export function logout () {
  return firebaseAuth().signOut()
}

export function login (email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
}
