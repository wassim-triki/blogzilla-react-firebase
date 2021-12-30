import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBPFUWuYKT44sbb_IUyjrV8-QaNJINWPKU",
  authDomain: "blogzilla-7b496.firebaseapp.com",
  projectId: "blogzilla-7b496",
  storageBucket: "blogzilla-7b496.appspot.com",
  messagingSenderId: "817777759636",
  appId: "1:817777759636:web:75952c029115b97b2deb81",
  measurementId: "G-8HRVHBYEVM",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
