// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfM2E_kB98a5-Q5NIuY7gfKJ-8VCO-3gw",
  authDomain: "flora-knots.firebaseapp.com",
  projectId: "flora-knots",
  storageBucket: "flora-knots.firebasestorage.app",
  messagingSenderId: "213757698026",
  appId: "1:213757698026:web:07dd19c30ee071af3edc93",
  measurementId: "G-PQE1EHQTR5"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
auth.useDeviceLanguage()
