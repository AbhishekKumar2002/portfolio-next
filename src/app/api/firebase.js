import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyB3UL4g9PGPbxxG7te8P7ycQ8z4HprZkCY",
    authDomain: "port-1707b.firebaseapp.com",
    projectId: "port-1707b",
    storageBucket: "port-1707b.appspot.com",
    messagingSenderId: "353841541520",
    appId: "1:353841541520:web:871605199272355c274315",
    measurementId: "G-GWVBYELP7Z"
  };
  

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);