// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU0cafg0_e1n4Vmv5D1b2ol5IGcqGbWPk",
  authDomain: "storewebtienda.firebaseapp.com",
  projectId: "storewebtienda",
  storageBucket: "storewebtienda.appspot.com",
  messagingSenderId: "240897630879",
  appId: "1:240897630879:web:f34fdcd7e7a74c098ab8aa",
  measurementId: "G-4J7N1HBS6D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);