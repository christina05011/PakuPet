// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBeHEWNoA3WFpIECfy3it4vmOWRxJrsrY",
  authDomain: "pakupet.firebaseapp.com",
  projectId: "pakupet",
  storageBucket: "pakupet.appspot.com",
  messagingSenderId: "1048964499240",
  appId: "1:1048964499240:web:f21ed1bd2971584de7321d",
  measurementId: "G-HDC4WTBJX2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)