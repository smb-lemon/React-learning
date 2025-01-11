import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBcPkX6qFDl4ZioRlSPQVObTDvEHAxPg-o",
  authDomain: "fir-basic-70337.firebaseapp.com",
  projectId: "fir-basic-70337",
  storageBucket: "fir-basic-70337.firebasestorage.app",
  messagingSenderId: "1092941845585",
  appId: "1:1092941845585:web:d9b41e742e6f5473155470",
  measurementId: "G-41G6SP0V5W"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuth = new GoogleAuthProvider();
export const db = getFirestore(app);
//const analytics = getAnalytics(app);