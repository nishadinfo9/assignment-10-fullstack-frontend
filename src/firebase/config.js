import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB0hGQ_0w3x792NU-C_ea-nrugsOXkb56Q",
  authDomain: "assignment-10-fullstack.firebaseapp.com",
  projectId: "assignment-10-fullstack",
  storageBucket: "assignment-10-fullstack.firebasestorage.app",
  messagingSenderId: "355801926010",
  appId: "1:355801926010:web:5aa7ec8895fbacec3e6ec3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
