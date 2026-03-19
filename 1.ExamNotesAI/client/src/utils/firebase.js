

import {getAuth, GoogleAuthProvider} from "firebase/auth"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC02rq88K15WLirmxh3-AKdNuvDBkGRyE",
  authDomain: "authexamnotes-766bf.firebaseapp.com",
  projectId: "authexamnotes-766bf",
  storageBucket: "authexamnotes-766bf.firebasestorage.app",
  messagingSenderId: "185059977614",
  appId: "1:185059977614:web:9423e974361cf75d805cdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}

