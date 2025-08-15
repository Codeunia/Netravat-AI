// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB80BnuqSn1Qk1FlsJJFkqEO12nEGa0jNA",
  authDomain: "netravat-ai.firebaseapp.com",
  projectId: "netravat-ai",
  storageBucket: "netravat-ai.firebasestorage.app",
  messagingSenderId: "877708456092",
  appId: "1:877708456092:web:b923c2c37c73b2c36e3d59",
  measurementId: "G-XQMPJ89DQ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);