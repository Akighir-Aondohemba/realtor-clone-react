// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIXPu-O7GDJIX8U8vpNFjgikurZg7nZqY",
  authDomain: "realtor-clone-react-36fd9.firebaseapp.com",
  projectId: "realtor-clone-react-36fd9",
  storageBucket: "realtor-clone-react-36fd9.appspot.com",
  messagingSenderId: "533098708574",
  appId: "1:533098708574:web:786f871710d38c0be6becf"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();