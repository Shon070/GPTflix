// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf-Jfa-S98xkv_nrwNkRCg7XnIBh1-Y60",
  authDomain: "gptflix-07.firebaseapp.com",
  projectId: "gptflix-07",
  storageBucket: "gptflix-07.appspot.com",
  messagingSenderId: "343417536518",
  appId: "1:343417536518:web:93b400b9b1aa0cafa08387",
  measurementId: "G-98262EKY8M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
