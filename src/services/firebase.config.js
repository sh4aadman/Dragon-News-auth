// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1LWA8bYAUn0Af-1KENgjGkQHZ4jPCuRA",
  authDomain: "dragon-news-auth-c492a.firebaseapp.com",
  projectId: "dragon-news-auth-c492a",
  storageBucket: "dragon-news-auth-c492a.appspot.com",
  messagingSenderId: "920155089935",
  appId: "1:920155089935:web:df4443a5be3a1293fc877a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;