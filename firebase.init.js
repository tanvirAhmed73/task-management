// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI4EoqwI31ME2QRht2tSGNRUQEQq7rlOk",
  authDomain: "task-management-2aa02.firebaseapp.com",
  projectId: "task-management-2aa02",
  storageBucket: "task-management-2aa02.appspot.com",
  messagingSenderId: "991655170896",
  appId: "1:991655170896:web:f87bd5cf363b487ad99255"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;