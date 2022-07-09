// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrXKP6q7m7PfI6wKk4e3Gcpl4mYlDADUo",
  authDomain: "live-chat--practice.firebaseapp.com",
  databaseURL: "https://live-chat--practice-default-rtdb.firebaseio.com",
  projectId: "live-chat--practice",
  storageBucket: "live-chat--practice.appspot.com",
  messagingSenderId: "318628534292",
  appId: "1:318628534292:web:9ecb4b4896a027c9876f01",
  measurementId: "G-C82MBZNJE2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app