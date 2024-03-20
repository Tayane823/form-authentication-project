import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAfciiEZcYiIdxv4AjPlGW5pyM2qo6dB58",
  authDomain: "form-auth-40644.firebaseapp.com",
  projectId: "form-auth-40644",
  storageBucket: "form-auth-40644.appspot.com",
  messagingSenderId: "5102623994",
  appId: "1:5102623994:web:864915eff07bd5a56abd43"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db };