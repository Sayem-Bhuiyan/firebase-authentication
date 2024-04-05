// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLkz8lUmm5veuvSK1FbVjZmHSgE9thRjE",
  authDomain: "fir-authentication-4e180.firebaseapp.com",
  projectId: "fir-authentication-4e180",
  storageBucket: "fir-authentication-4e180.appspot.com",
  messagingSenderId: "965349790532",
  appId: "1:965349790532:web:f84616d49091daadd6fd11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;