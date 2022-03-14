import { initializeApp } from "firebase/app";
import {onAuthStateChanged, getAuth} from 'firebase/auth';
import store from "../store";
//For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXhil7dbWx-s1IU7DJ5uwUeISQK4WRZ9g",
  authDomain: "menaxhimilibrarise.firebaseapp.com",
  projectId: "menaxhimilibrarise",
  storageBucket: "menaxhimilibrarise.appspot.com",
  messagingSenderId: "929368843326",
  appId: "1:929368843326:web:5a705edbf4ec3dc9f49d6f",
  measurementId: "G-PS8XZWFN0D"
};

initializeApp(firebaseConfig);

onAuthStateChanged(getAuth(), async (user) => {
  const tokenResult = user
    ? await getAuth().currentUser.getIdTokenResult()
    : { claims: null };

  store.dispatch("fetchUser", { user, claims: tokenResult.claims });
});

